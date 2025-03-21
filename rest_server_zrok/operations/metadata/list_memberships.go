// Code generated by go-swagger; DO NOT EDIT.

package metadata

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"context"
	"net/http"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"

	"github.com/openziti/zrok/rest_model_zrok"
)

// ListMembershipsHandlerFunc turns a function with the right signature into a list memberships handler
type ListMembershipsHandlerFunc func(ListMembershipsParams, *rest_model_zrok.Principal) middleware.Responder

// Handle executing the request and returning a response
func (fn ListMembershipsHandlerFunc) Handle(params ListMembershipsParams, principal *rest_model_zrok.Principal) middleware.Responder {
	return fn(params, principal)
}

// ListMembershipsHandler interface for that can handle valid list memberships params
type ListMembershipsHandler interface {
	Handle(ListMembershipsParams, *rest_model_zrok.Principal) middleware.Responder
}

// NewListMemberships creates a new http.Handler for the list memberships operation
func NewListMemberships(ctx *middleware.Context, handler ListMembershipsHandler) *ListMemberships {
	return &ListMemberships{Context: ctx, Handler: handler}
}

/*
	ListMemberships swagger:route GET /memberships metadata listMemberships

ListMemberships list memberships API
*/
type ListMemberships struct {
	Context *middleware.Context
	Handler ListMembershipsHandler
}

func (o *ListMemberships) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewListMembershipsParams()
	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		*r = *aCtx
	}
	var principal *rest_model_zrok.Principal
	if uprinc != nil {
		principal = uprinc.(*rest_model_zrok.Principal) // this is really a rest_model_zrok.Principal, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}

// ListMembershipsOKBody list memberships o k body
//
// swagger:model ListMembershipsOKBody
type ListMembershipsOKBody struct {

	// memberships
	Memberships []*ListMembershipsOKBodyMembershipsItems0 `json:"memberships"`
}

// Validate validates this list memberships o k body
func (o *ListMembershipsOKBody) Validate(formats strfmt.Registry) error {
	var res []error

	if err := o.validateMemberships(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *ListMembershipsOKBody) validateMemberships(formats strfmt.Registry) error {
	if swag.IsZero(o.Memberships) { // not required
		return nil
	}

	for i := 0; i < len(o.Memberships); i++ {
		if swag.IsZero(o.Memberships[i]) { // not required
			continue
		}

		if o.Memberships[i] != nil {
			if err := o.Memberships[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("listMembershipsOK" + "." + "memberships" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("listMembershipsOK" + "." + "memberships" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this list memberships o k body based on the context it is used
func (o *ListMembershipsOKBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := o.contextValidateMemberships(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *ListMembershipsOKBody) contextValidateMemberships(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(o.Memberships); i++ {

		if o.Memberships[i] != nil {

			if swag.IsZero(o.Memberships[i]) { // not required
				return nil
			}

			if err := o.Memberships[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("listMembershipsOK" + "." + "memberships" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("listMembershipsOK" + "." + "memberships" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (o *ListMembershipsOKBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *ListMembershipsOKBody) UnmarshalBinary(b []byte) error {
	var res ListMembershipsOKBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// ListMembershipsOKBodyMembershipsItems0 list memberships o k body memberships items0
//
// swagger:model ListMembershipsOKBodyMembershipsItems0
type ListMembershipsOKBodyMembershipsItems0 struct {

	// admin
	Admin bool `json:"admin,omitempty"`

	// description
	Description string `json:"description,omitempty"`

	// organization token
	OrganizationToken string `json:"organizationToken,omitempty"`
}

// Validate validates this list memberships o k body memberships items0
func (o *ListMembershipsOKBodyMembershipsItems0) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this list memberships o k body memberships items0 based on context it is used
func (o *ListMembershipsOKBodyMembershipsItems0) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *ListMembershipsOKBodyMembershipsItems0) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *ListMembershipsOKBodyMembershipsItems0) UnmarshalBinary(b []byte) error {
	var res ListMembershipsOKBodyMembershipsItems0
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
