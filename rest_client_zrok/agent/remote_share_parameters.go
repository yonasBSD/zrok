// Code generated by go-swagger; DO NOT EDIT.

package agent

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
)

// NewRemoteShareParams creates a new RemoteShareParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewRemoteShareParams() *RemoteShareParams {
	return &RemoteShareParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewRemoteShareParamsWithTimeout creates a new RemoteShareParams object
// with the ability to set a timeout on a request.
func NewRemoteShareParamsWithTimeout(timeout time.Duration) *RemoteShareParams {
	return &RemoteShareParams{
		timeout: timeout,
	}
}

// NewRemoteShareParamsWithContext creates a new RemoteShareParams object
// with the ability to set a context for a request.
func NewRemoteShareParamsWithContext(ctx context.Context) *RemoteShareParams {
	return &RemoteShareParams{
		Context: ctx,
	}
}

// NewRemoteShareParamsWithHTTPClient creates a new RemoteShareParams object
// with the ability to set a custom HTTPClient for a request.
func NewRemoteShareParamsWithHTTPClient(client *http.Client) *RemoteShareParams {
	return &RemoteShareParams{
		HTTPClient: client,
	}
}

/*
RemoteShareParams contains all the parameters to send to the API endpoint

	for the remote share operation.

	Typically these are written to a http.Request.
*/
type RemoteShareParams struct {

	// Body.
	Body RemoteShareBody

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the remote share params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *RemoteShareParams) WithDefaults() *RemoteShareParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the remote share params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *RemoteShareParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the remote share params
func (o *RemoteShareParams) WithTimeout(timeout time.Duration) *RemoteShareParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the remote share params
func (o *RemoteShareParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the remote share params
func (o *RemoteShareParams) WithContext(ctx context.Context) *RemoteShareParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the remote share params
func (o *RemoteShareParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the remote share params
func (o *RemoteShareParams) WithHTTPClient(client *http.Client) *RemoteShareParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the remote share params
func (o *RemoteShareParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the remote share params
func (o *RemoteShareParams) WithBody(body RemoteShareBody) *RemoteShareParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the remote share params
func (o *RemoteShareParams) SetBody(body RemoteShareBody) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *RemoteShareParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if err := r.SetBodyParam(o.Body); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
