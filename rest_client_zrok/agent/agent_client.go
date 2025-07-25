// Code generated by go-swagger; DO NOT EDIT.

package agent

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new agent API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for agent API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	Enroll(params *EnrollParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*EnrollOK, error)

	Ping(params *PingParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PingOK, error)

	RemoteAccess(params *RemoteAccessParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteAccessOK, error)

	RemoteShare(params *RemoteShareParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteShareOK, error)

	RemoteStatus(params *RemoteStatusParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteStatusOK, error)

	RemoteUnaccess(params *RemoteUnaccessParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteUnaccessOK, error)

	RemoteUnshare(params *RemoteUnshareParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteUnshareOK, error)

	ShareHTTPHealthcheck(params *ShareHTTPHealthcheckParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ShareHTTPHealthcheckOK, error)

	Unenroll(params *UnenrollParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UnenrollOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
Enroll enroll API
*/
func (a *Client) Enroll(params *EnrollParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*EnrollOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewEnrollParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "enroll",
		Method:             "POST",
		PathPattern:        "/agent/enroll",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &EnrollReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*EnrollOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for enroll: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
Ping ping API
*/
func (a *Client) Ping(params *PingParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PingOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPingParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ping",
		Method:             "POST",
		PathPattern:        "/agent/ping",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &PingReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*PingOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for ping: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
RemoteAccess remote access API
*/
func (a *Client) RemoteAccess(params *RemoteAccessParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteAccessOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewRemoteAccessParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "remoteAccess",
		Method:             "POST",
		PathPattern:        "/agent/access",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &RemoteAccessReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*RemoteAccessOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for remoteAccess: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
RemoteShare remote share API
*/
func (a *Client) RemoteShare(params *RemoteShareParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteShareOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewRemoteShareParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "remoteShare",
		Method:             "POST",
		PathPattern:        "/agent/share",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &RemoteShareReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*RemoteShareOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for remoteShare: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
RemoteStatus remote status API
*/
func (a *Client) RemoteStatus(params *RemoteStatusParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteStatusOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewRemoteStatusParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "remoteStatus",
		Method:             "POST",
		PathPattern:        "/agent/status",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &RemoteStatusReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*RemoteStatusOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for remoteStatus: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
RemoteUnaccess remote unaccess API
*/
func (a *Client) RemoteUnaccess(params *RemoteUnaccessParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteUnaccessOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewRemoteUnaccessParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "remoteUnaccess",
		Method:             "POST",
		PathPattern:        "/agent/unaccess",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &RemoteUnaccessReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*RemoteUnaccessOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for remoteUnaccess: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
RemoteUnshare remote unshare API
*/
func (a *Client) RemoteUnshare(params *RemoteUnshareParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*RemoteUnshareOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewRemoteUnshareParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "remoteUnshare",
		Method:             "POST",
		PathPattern:        "/agent/unshare",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &RemoteUnshareReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*RemoteUnshareOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for remoteUnshare: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
ShareHTTPHealthcheck share Http healthcheck API
*/
func (a *Client) ShareHTTPHealthcheck(params *ShareHTTPHealthcheckParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ShareHTTPHealthcheckOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewShareHTTPHealthcheckParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "shareHttpHealthcheck",
		Method:             "POST",
		PathPattern:        "/agent/share/http-healthcheck",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &ShareHTTPHealthcheckReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*ShareHTTPHealthcheckOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for shareHttpHealthcheck: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
Unenroll unenroll API
*/
func (a *Client) Unenroll(params *UnenrollParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UnenrollOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUnenrollParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "unenroll",
		Method:             "POST",
		PathPattern:        "/agent/unenroll",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &UnenrollReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*UnenrollOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for unenroll: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
