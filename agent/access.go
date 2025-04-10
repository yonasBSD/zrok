package agent

import (
	"github.com/michaelquigley/pfxlog"
	"github.com/openziti/zrok/agent/proctree"
	"github.com/openziti/zrok/cmd/zrok/subordinate"
)

type AccessPrivateRequest struct {
	Token           string   `json:"token"`
	BindAddress     string   `json:"bind_address"`
	AutoMode        bool     `json:"auto_mode"`
	AutoAddress     string   `json:"auto_address"`
	AutoStartPort   uint16   `json:"auto_start_port"`
	AutoEndPort     uint16   `json:"auto_end_port"`
	ResponseHeaders []string `json:"response_headers"`
}

type access struct {
	frontendToken   string
	token           string
	bindAddress     string
	autoMode        bool
	autoAddress     string
	autoStartPort   uint16
	autoEndPort     uint16
	responseHeaders []string

	request *AccessPrivateRequest

	process *proctree.Child
	sub     *subordinate.MessageHandler

	agent *Agent
}

func (a *access) monitor() {
	if err := proctree.WaitChild(a.process); err != nil {
		pfxlog.ChannelLogger(a.token).Error(err)
	}
	a.agent.rmAccess <- a
}
