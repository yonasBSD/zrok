package zrok_edge_sdk

import (
	"context"
	"github.com/openziti/edge/rest_management_api_client"
	edge_service "github.com/openziti/edge/rest_management_api_client/service"
	"github.com/openziti/edge/rest_model"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
	"time"
)

func CreateShareService(envZId, svcToken, cfgId string, edge *rest_management_api_client.ZitiEdgeManagement) (svcZId string, err error) {
	configs := []string{cfgId}
	tags := ZrokServiceTags(svcToken)
	svcZId, err = CreateService(svcToken, configs, tags.SubTags, edge)
	if err != nil {
		return "", errors.Wrapf(err, "error creating service '%v'", svcToken)
	}
	logrus.Infof("created zrok service named '%v' (with ziti id '%v') for environment '%v'", svcToken, svcZId, envZId)
	return svcZId, nil
}

func CreateService(name string, cfgIds []string, moreTags map[string]interface{}, edge *rest_management_api_client.ZitiEdgeManagement) (svcZId string, err error) {
	encryptionRequired := true
	svc := &rest_model.ServiceCreate{
		EncryptionRequired: &encryptionRequired,
		Name:               &name,
	}
	if cfgIds != nil {
		svc.Configs = cfgIds
	}
	tags := ZrokTags()
	for k, v := range moreTags {
		tags.SubTags[k] = v
	}
	svc.Tags = tags
	req := &edge_service.CreateServiceParams{
		Service: svc,
		Context: context.Background(),
	}
	req.SetTimeout(30 * time.Second)
	resp, err := edge.Service.CreateService(req, nil)
	if err != nil {
		return "", err
	}
	return resp.Payload.Data.ID, nil
}

func DeleteService(envZId, svcZId string, edge *rest_management_api_client.ZitiEdgeManagement) error {
	req := &edge_service.DeleteServiceParams{
		ID:      svcZId,
		Context: context.Background(),
	}
	req.SetTimeout(30 * time.Second)
	_, err := edge.Service.DeleteService(req, nil)
	if err != nil {
		return err
	}
	logrus.Infof("deleted service '%v' for environment '%v'", svcZId, envZId)
	return nil
}
