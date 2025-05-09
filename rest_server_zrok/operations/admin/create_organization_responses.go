// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// CreateOrganizationCreatedCode is the HTTP code returned for type CreateOrganizationCreated
const CreateOrganizationCreatedCode int = 201

/*
CreateOrganizationCreated organization created

swagger:response createOrganizationCreated
*/
type CreateOrganizationCreated struct {

	/*
	  In: Body
	*/
	Payload *CreateOrganizationCreatedBody `json:"body,omitempty"`
}

// NewCreateOrganizationCreated creates CreateOrganizationCreated with default headers values
func NewCreateOrganizationCreated() *CreateOrganizationCreated {

	return &CreateOrganizationCreated{}
}

// WithPayload adds the payload to the create organization created response
func (o *CreateOrganizationCreated) WithPayload(payload *CreateOrganizationCreatedBody) *CreateOrganizationCreated {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the create organization created response
func (o *CreateOrganizationCreated) SetPayload(payload *CreateOrganizationCreatedBody) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *CreateOrganizationCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(201)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

// CreateOrganizationUnauthorizedCode is the HTTP code returned for type CreateOrganizationUnauthorized
const CreateOrganizationUnauthorizedCode int = 401

/*
CreateOrganizationUnauthorized unauthorized

swagger:response createOrganizationUnauthorized
*/
type CreateOrganizationUnauthorized struct {
}

// NewCreateOrganizationUnauthorized creates CreateOrganizationUnauthorized with default headers values
func NewCreateOrganizationUnauthorized() *CreateOrganizationUnauthorized {

	return &CreateOrganizationUnauthorized{}
}

// WriteResponse to the client
func (o *CreateOrganizationUnauthorized) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(401)
}

// CreateOrganizationInternalServerErrorCode is the HTTP code returned for type CreateOrganizationInternalServerError
const CreateOrganizationInternalServerErrorCode int = 500

/*
CreateOrganizationInternalServerError internal server error

swagger:response createOrganizationInternalServerError
*/
type CreateOrganizationInternalServerError struct {
}

// NewCreateOrganizationInternalServerError creates CreateOrganizationInternalServerError with default headers values
func NewCreateOrganizationInternalServerError() *CreateOrganizationInternalServerError {

	return &CreateOrganizationInternalServerError{}
}

// WriteResponse to the client
func (o *CreateOrganizationInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}
