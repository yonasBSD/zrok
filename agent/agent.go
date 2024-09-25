package agent

import (
	"github.com/openziti/zrok/agent/agentGrpc"
	"github.com/openziti/zrok/agent/proctree"
	"github.com/openziti/zrok/environment/env_core"
	"github.com/openziti/zrok/sdk/golang/sdk"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"net"
	"os"
)

type Agent struct {
	root        env_core.Root
	agentSocket string
	shares      map[string]*share
	addShare    chan *share
	rmShare     chan *share
	accesses    map[string]*access
	addAccess   chan *access
	rmAccess    chan *access
}

func NewAgent(root env_core.Root) (*Agent, error) {
	if !root.IsEnabled() {
		return nil, errors.Errorf("unable to load environment; did you 'zrok enable'?")
	}
	return &Agent{
		root:      root,
		shares:    make(map[string]*share),
		addShare:  make(chan *share),
		rmShare:   make(chan *share),
		accesses:  make(map[string]*access),
		addAccess: make(chan *access),
		rmAccess:  make(chan *access),
	}, nil
}

func (a *Agent) Run() error {
	logrus.Infof("started")

	if err := proctree.Init("zrok Agent"); err != nil {
		return err
	}
	go a.manager()

	agentSocket, err := a.root.AgentSocket()
	if err != nil {
		return err
	}
	l, err := net.Listen("unix", agentSocket)
	if err != nil {
		return err
	}
	a.agentSocket = agentSocket

	srv := grpc.NewServer()
	agentGrpc.RegisterAgentServer(srv, &agentGrpcImpl{agent: a})
	if err := srv.Serve(l); err != nil {
		return err
	}

	return nil
}

func (a *Agent) Shutdown() {
	logrus.Infof("stopping")

	if err := os.Remove(a.agentSocket); err != nil {
		logrus.Warnf("unable to remove agent socket: %v", err)
	}
	for _, shr := range a.shares {
		logrus.Debugf("stopping share '%v'", shr.token)
		a.rmShare <- shr
	}
	for _, acc := range a.accesses {
		logrus.Debugf("stopping access '%v'", acc.token)
		a.rmAccess <- acc
	}
}

func (a *Agent) manager() {
	logrus.Info("started")
	defer logrus.Warn("exited")

	for {
		select {
		case inShare := <-a.addShare:
			logrus.Infof("adding new share '%v'", inShare.token)
			a.shares[inShare.token] = inShare

		case outShare := <-a.rmShare:
			if shr, found := a.shares[outShare.token]; found {
				logrus.Infof("removing share '%v'", shr.token)
				if err := proctree.StopChild(shr.process); err != nil {
					logrus.Errorf("error stopping share '%v': %v", shr.token, err)
				}
				if err := proctree.WaitChild(shr.process); err != nil {
					logrus.Errorf("error joining share '%v': %v", shr.token, err)
				}
				if !shr.reserved {
					if err := a.deleteShare(shr.token); err != nil {
						logrus.Errorf("error deleting share '%v': %v", shr.token, err)
					}
				}
				delete(a.shares, shr.token)
			} else {
				logrus.Debug("skipping unidentified (orphaned) share removal")
			}

		case inAccess := <-a.addAccess:
			logrus.Infof("adding new access '%v'", inAccess.frontendToken)
			a.accesses[inAccess.frontendToken] = inAccess

		case outAccess := <-a.rmAccess:
			if acc, found := a.accesses[outAccess.frontendToken]; found {
				logrus.Infof("removing access '%v'", acc.frontendToken)
				if err := proctree.StopChild(acc.process); err != nil {
					logrus.Errorf("error stopping access '%v': %v", acc.frontendToken, err)
				}
				if err := proctree.WaitChild(acc.process); err != nil {
					logrus.Errorf("error joining access '%v': %v", acc.frontendToken, err)
				}
				if err := a.deleteAccess(acc.token, acc.frontendToken); err != nil {
					logrus.Errorf("error deleting access '%v': %v", acc.frontendToken, err)
				}
				delete(a.accesses, acc.frontendToken)
			} else {
				logrus.Debug("skipping unidentified (orphaned) access removal")
			}
		}
	}
}

func (a *Agent) deleteShare(token string) error {
	logrus.Debugf("deleting share '%v'", token)
	if err := sdk.DeleteShare(a.root, &sdk.Share{Token: token}); err != nil {
		return err
	}
	return nil
}

func (a *Agent) deleteAccess(token, frontendToken string) error {
	logrus.Debugf("deleting access '%v'", frontendToken)
	if err := sdk.DeleteAccess(a.root, &sdk.Access{Token: frontendToken, ShareToken: token}); err != nil {
		return err
	}
	return nil
}

type agentGrpcImpl struct {
	agentGrpc.UnimplementedAgentServer
	agent *Agent
}
