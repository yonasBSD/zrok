package agent

import (
	"context"
	"errors"
	"fmt"
	"github.com/openziti/zrok/agent/agentGrpc"
	"github.com/openziti/zrok/agent/proctree"
	"github.com/openziti/zrok/cmd/zrok/subordinate"
	"github.com/openziti/zrok/environment"
	"github.com/sirupsen/logrus"
	"os"
)

func (a *Agent) AccessPrivate(req *AccessPrivateRequest) (frontendToken string, err error) {
	root, err := environment.LoadRoot()
	if err != nil {
		return "", err
	}

	if !root.IsEnabled() {
		return "", errors.New("unable to load environment; did you 'zrok enable'?")
	}

	accCmd := []string{os.Args[0], "access", "private", "--subordinate", "-b", req.BindAddress, req.Token}
	if req.AutoMode {
		accCmd = append(accCmd, "--auto", "--auto-address", req.AutoAddress, "--auto-start-port", fmt.Sprintf("%v", req.AutoStartPort))
		accCmd = append(accCmd, "--auto-end-port", fmt.Sprintf("%v", req.AutoEndPort))
	}
	logrus.Info(accCmd)

	acc := &access{
		token:           req.Token,
		bindAddress:     req.BindAddress,
		autoMode:        req.AutoMode,
		autoAddress:     req.AutoAddress,
		autoStartPort:   req.AutoStartPort,
		autoEndPort:     req.AutoEndPort,
		responseHeaders: req.ResponseHeaders,
		request:         req,
		sub:             subordinate.NewMessageHandler(),
		agent:           a,
	}
	acc.sub.MessageHandler = func(msg subordinate.Message) {
		logrus.Info(msg)
	}
	var bootErr error
	acc.sub.BootHandler = func(msgType string, msg subordinate.Message) {
		switch msgType {
		case subordinate.BootMessage:
			if v, found := msg["frontend_token"]; found {
				if str, ok := v.(string); ok {
					acc.frontendToken = str
				}
			}
			if v, found := msg["bind_address"]; found {
				if sr, ok := v.(string); ok {
					acc.bindAddress = sr
				}
			}

		case subordinate.ErrorMessage:
			if v, found := msg[subordinate.ErrorMessage]; found {
				if str, ok := v.(string); ok {
					bootErr = errors.New(str)
				}
			}
		}
	}
	acc.sub.MalformedHandler = func(msg subordinate.Message) {
		logrus.Error(msg)
	}

	logrus.Infof("executing '%v'", accCmd)

	acc.process, err = proctree.StartChild(acc.sub.Tail, accCmd...)
	if err != nil {
		return "", err
	}

	<-acc.sub.BootComplete

	if bootErr == nil {
		go acc.monitor()
		a.addAccess <- acc
		return acc.frontendToken, nil

	} else {
		if err := proctree.WaitChild(acc.process); err != nil {
			logrus.Errorf("error joining: %v", err)
		}
		return "", fmt.Errorf("unable to start access: %v", bootErr)
	}
}

func (i *agentGrpcImpl) AccessPrivate(_ context.Context, req *agentGrpc.AccessPrivateRequest) (*agentGrpc.AccessPrivateResponse, error) {
	if frontendToken, err := i.agent.AccessPrivate(&AccessPrivateRequest{
		Token:           req.Token,
		BindAddress:     req.BindAddress,
		AutoMode:        req.AutoMode,
		AutoAddress:     req.AutoAddress,
		AutoStartPort:   uint16(req.AutoStartPort),
		AutoEndPort:     uint16(req.AutoEndPort),
		ResponseHeaders: req.ResponseHeaders,
	}); err == nil {
		return &agentGrpc.AccessPrivateResponse{FrontendToken: frontendToken}, nil
	} else {
		return nil, err
	}
}
