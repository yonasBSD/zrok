package main

import (
	"fmt"
	tea "github.com/charmbracelet/bubbletea"
	httptransport "github.com/go-openapi/runtime/client"
	"github.com/openziti/zrok/endpoints"
	"github.com/openziti/zrok/endpoints/proxy"
	"github.com/openziti/zrok/environment"
	"github.com/openziti/zrok/rest_client_zrok/metadata"
	"github.com/openziti/zrok/rest_client_zrok/share"
	"github.com/openziti/zrok/rest_model_zrok"
	"github.com/openziti/zrok/sdk"
	"github.com/openziti/zrok/tui"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

func init() {
	shareCmd.AddCommand(newShareReservedCommand().cmd)
}

type shareReservedCommand struct {
	overrideEndpoint string
	headless         bool
	insecure         bool
	cmd              *cobra.Command
}

func newShareReservedCommand() *shareReservedCommand {
	cmd := &cobra.Command{
		Use:   "reserved <shareToken>",
		Short: "Start a backend for a reserved share",
	}
	command := &shareReservedCommand{cmd: cmd}
	cmd.Flags().StringVar(&command.overrideEndpoint, "override-endpoint", "", "Override the stored target endpoint with a replacement")
	cmd.Flags().BoolVar(&command.headless, "headless", false, "Disable TUI and run headless")
	cmd.Flags().BoolVar(&command.insecure, "insecure", false, "Enable insecure TLS certificate validation")
	cmd.Run = command.run
	return command
}

func (cmd *shareReservedCommand) run(_ *cobra.Command, args []string) {
	shrToken := args[0]
	var target string

	env, err := environment.LoadRoot()
	if err != nil {
		if !panicInstead {
			tui.Error("error loading environment", err)
		}
		panic(err)
	}

	if !env.IsEnabled() {
		tui.Error("unable to load environment; did you 'zrok enable'?", nil)
	}

	zrok, err := env.Client()
	if err != nil {
		if !panicInstead {
			tui.Error("unable to create zrok client", err)
		}
		panic(err)
	}
	auth := httptransport.APIKeyAuth("X-TOKEN", "header", env.Environment().Token)
	req := metadata.NewGetShareDetailParams()
	req.ShrToken = shrToken
	resp, err := zrok.Metadata.GetShareDetail(req, auth)
	if err != nil {
		if !panicInstead {
			tui.Error("unable to retrieve reserved share", err)
		}
		panic(err)
	}
	target = cmd.overrideEndpoint
	if target == "" {
		target = resp.Payload.BackendProxyEndpoint
	}

	zif, err := env.ZitiIdentityNamed(env.EnvironmentIdentityName())
	if err != nil {
		if !panicInstead {
			tui.Error("unable to load ziti identity configuration", err)
		}
		panic(err)
	}

	logrus.Infof("sharing target: '%v'", target)

	if resp.Payload.BackendProxyEndpoint != target {
		upReq := share.NewUpdateShareParams()
		upReq.Body = &rest_model_zrok.UpdateShareRequest{
			ShrToken:             shrToken,
			BackendProxyEndpoint: target,
		}
		if _, err := zrok.Share.UpdateShare(upReq, auth); err != nil {
			if !panicInstead {
				tui.Error("unable to update backend proxy endpoint", err)
			}
			panic(err)
		}
		logrus.Infof("updated backend proxy endpoint to: %v", target)
	} else {
		logrus.Infof("using existing backend proxy endpoint: %v", target)
	}

	requestsChan := make(chan *endpoints.Request, 1024)
	switch resp.Payload.BackendMode {
	case "proxy":
		cfg := &proxy.BackendConfig{
			IdentityPath:    zif,
			EndpointAddress: target,
			ShrToken:        shrToken,
			Insecure:        cmd.insecure,
			RequestsChan:    requestsChan,
		}
		_, err := cmd.proxyBackendMode(cfg)
		if err != nil {
			if !panicInstead {
				tui.Error("unable to create proxy backend handler", err)
			}
			panic(err)
		}

	case "web":
		cfg := &proxy.CaddyWebBackendConfig{
			IdentityPath: zif,
			WebRoot:      target,
			ShrToken:     shrToken,
			Requests:     requestsChan,
		}
		_, err := cmd.webBackendMode(cfg)
		if err != nil {
			if !panicInstead {
				tui.Error("unable to create web backend handler", err)
			}
			panic(err)
		}

	default:
		tui.Error("invalid backend mode", nil)
	}

	if cmd.headless {
		switch resp.Payload.ShareMode {
		case string(sdk.PublicShareMode):
			logrus.Infof("access your zrok share: %v", resp.Payload.FrontendEndpoint)

		case string(sdk.PrivateShareMode):
			logrus.Infof("use this command to access your zrok share: 'zrok access private %v'", shrToken)
		}
		for {
			select {
			case req := <-requestsChan:
				logrus.Infof("%v -> %v %v", req.RemoteAddr, req.Method, req.Path)
			}
		}
	} else {
		var shareDescription string
		switch resp.Payload.ShareMode {
		case string(sdk.PublicShareMode):
			shareDescription = resp.Payload.FrontendEndpoint
		case string(sdk.PrivateShareMode):
			shareDescription = fmt.Sprintf("access your share with: %v", tui.Code.Render(fmt.Sprintf("zrok access private %v", shrToken)))
		}

		mdl := newShareModel(shrToken, []string{shareDescription}, sdk.ShareMode(resp.Payload.ShareMode), sdk.BackendMode(resp.Payload.BackendMode))
		logrus.SetOutput(mdl)
		prg := tea.NewProgram(mdl, tea.WithAltScreen())
		mdl.prg = prg

		go func() {
			for {
				select {
				case req := <-requestsChan:
					prg.Send(req)
				}
			}
		}()

		if _, err := prg.Run(); err != nil {
			tui.Error("An error occurred", err)
		}

		close(requestsChan)
	}
}

func (cmd *shareReservedCommand) proxyBackendMode(cfg *proxy.BackendConfig) (endpoints.RequestHandler, error) {
	be, err := proxy.NewBackend(cfg)
	if err != nil {
		return nil, errors.Wrap(err, "error creating http proxy backend")
	}

	go func() {
		if err := be.Run(); err != nil {
			logrus.Errorf("error running http proxy backend: %v", err)
		}
	}()

	return be, nil
}

func (cmd *shareReservedCommand) webBackendMode(cfg *proxy.CaddyWebBackendConfig) (endpoints.RequestHandler, error) {
	be, err := proxy.NewCaddyWebBackend(cfg)
	if err != nil {
		return nil, errors.Wrap(err, "error creating http web backend")
	}

	go func() {
		if err := be.Run(); err != nil {
			logrus.Errorf("error running http web backend: %v", err)
		}
	}()

	return be, nil
}
