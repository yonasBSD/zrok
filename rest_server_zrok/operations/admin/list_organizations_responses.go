// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// ListOrganizationsOKCode is the HTTP code returned for type ListOrganizationsOK
const ListOrganizationsOKCode int = 200

/*
ListOrganizationsOK ok

swagger:response listOrganizationsOK
*/
type ListOrganizationsOK struct {

	/*
	  In: Body
	*/
	Payload *ListOrganizationsOKBody `json:"body,omitempty"`
}

// NewListOrganizationsOK creates ListOrganizationsOK with default headers values
func NewListOrganizationsOK() *ListOrganizationsOK {

	return &ListOrganizationsOK{}
}

// WithPayload adds the payload to the list organizations o k response
func (o *ListOrganizationsOK) WithPayload(payload *ListOrganizationsOKBody) *ListOrganizationsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list organizations o k response
func (o *ListOrganizationsOK) SetPayload(payload *ListOrganizationsOKBody) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListOrganizationsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

// ListOrganizationsUnauthorizedCode is the HTTP code returned for type ListOrganizationsUnauthorized
const ListOrganizationsUnauthorizedCode int = 401

/*
ListOrganizationsUnauthorized unauthorized

swagger:response listOrganizationsUnauthorized
*/
type ListOrganizationsUnauthorized struct {
}

// NewListOrganizationsUnauthorized creates ListOrganizationsUnauthorized with default headers values
func NewListOrganizationsUnauthorized() *ListOrganizationsUnauthorized {

	return &ListOrganizationsUnauthorized{}
}

// WriteResponse to the client
func (o *ListOrganizationsUnauthorized) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(401)
}

// ListOrganizationsInternalServerErrorCode is the HTTP code returned for type ListOrganizationsInternalServerError
const ListOrganizationsInternalServerErrorCode int = 500

/*
ListOrganizationsInternalServerError internal server error

swagger:response listOrganizationsInternalServerError
*/
type ListOrganizationsInternalServerError struct {
}

// NewListOrganizationsInternalServerError creates ListOrganizationsInternalServerError with default headers values
func NewListOrganizationsInternalServerError() *ListOrganizationsInternalServerError {

	return &ListOrganizationsInternalServerError{}
}

// WriteResponse to the client
func (o *ListOrganizationsInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}
