package controller

import (
	"context"
	"fmt"
	"github.com/go-openapi/runtime/middleware"
	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
	"github.com/openziti-test-kitchen/zrok/rest_server_zrok/operations/tunnel"
	"github.com/openziti/edge/rest_management_api_client/service"
	"github.com/openziti/edge/rest_management_api_client/service_edge_router_policy"
	"github.com/openziti/edge/rest_management_api_client/service_policy"
	"github.com/openziti/edge/rest_model"
	"github.com/sirupsen/logrus"
	"time"
)

func tunnelHandler(params tunnel.TunnelParams) middleware.Responder {
	edge, err := edgeClient()
	if err != nil {
		logrus.Error(err)
		return middleware.Error(500, err.Error())
	}

	serviceId, err := randomId()
	if err != nil {
		logrus.Error(err)
		return middleware.Error(500, err.Error())
	}
	logrus.Infof("using service '%v'", serviceId)

	semantic := rest_model.SemanticAllOf

	// Service
	svcConfigs := make([]string, 0)
	svcEnc := true
	svc := &rest_model.ServiceCreate{
		Configs:            svcConfigs,
		EncryptionRequired: &svcEnc,
		Name:               &serviceId,
	}
	svcParams := &service.CreateServiceParams{
		Service: svc,
		Context: context.Background(),
	}
	svcParams.SetTimeout(30 * time.Second)
	svcResp, err := edge.Service.CreateService(svcParams, nil)
	if err != nil {
		logrus.Error(err)
		return middleware.Error(500, err.Error())
	}
	logrus.Infof("created service '%v'", serviceId)

	// Service Policy
	svcpIdRoles := []string{fmt.Sprintf("@%v", params.Body.Identity)}
	svcpPcRoles := []string{}
	svcpSvcRoles := []string{fmt.Sprintf("@%v", svcResp.Payload.Data.ID)}
	svcpDialBind := rest_model.DialBindBind
	svcp := &rest_model.ServicePolicyCreate{
		IdentityRoles:     svcpIdRoles,
		Name:              &serviceId,
		PostureCheckRoles: svcpPcRoles,
		Semantic:          &semantic,
		ServiceRoles:      svcpSvcRoles,
		Type:              &svcpDialBind,
	}
	svcpParams := &service_policy.CreateServicePolicyParams{
		Policy:  svcp,
		Context: context.Background(),
	}
	svcpParams.SetTimeout(30 * time.Second)
	_, err = edge.ServicePolicy.CreateServicePolicy(svcpParams, nil)
	if err != nil {
		logrus.Error(err)
		return middleware.Error(500, err.Error())
	}
	logrus.Infof("created service policy '%v'", serviceId)

	// Service Edge Router Policy
	serpErRoles := []string{"@tDnhG8jkG9"} // @linux-edge-router

	serpSvcRoles := []string{fmt.Sprintf("@%v", svcResp.Payload.Data.ID)}
	serp := &rest_model.ServiceEdgeRouterPolicyCreate{
		EdgeRouterRoles: serpErRoles,
		Name:            &serviceId,
		Semantic:        &semantic,
		ServiceRoles:    serpSvcRoles,
	}
	serpParams := &service_edge_router_policy.CreateServiceEdgeRouterPolicyParams{
		Policy:  serp,
		Context: context.Background(),
	}
	serpParams.SetTimeout(30 * time.Second)
	_, err = edge.ServiceEdgeRouterPolicy.CreateServiceEdgeRouterPolicy(serpParams, nil)
	if err != nil {
		logrus.Error(err)
		return middleware.Error(500, err.Error())
	}
	logrus.Infof("created service edge router policy '%v'", serviceId)

	resp := tunnel.NewTunnelCreated().WithPayload(&rest_model_zrok.TunnelResponse{
		Service: serviceId,
	})
	return resp
}
