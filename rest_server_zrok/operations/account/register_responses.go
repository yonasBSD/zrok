// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/openziti/zrok/rest_model_zrok"
)

// RegisterOKCode is the HTTP code returned for type RegisterOK
const RegisterOKCode int = 200

/*
RegisterOK account created

swagger:response registerOK
*/
type RegisterOK struct {

	/*
	  In: Body
	*/
	Payload *RegisterOKBody `json:"body,omitempty"`
}

// NewRegisterOK creates RegisterOK with default headers values
func NewRegisterOK() *RegisterOK {

	return &RegisterOK{}
}

// WithPayload adds the payload to the register o k response
func (o *RegisterOK) WithPayload(payload *RegisterOKBody) *RegisterOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the register o k response
func (o *RegisterOK) SetPayload(payload *RegisterOKBody) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *RegisterOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

// RegisterNotFoundCode is the HTTP code returned for type RegisterNotFound
const RegisterNotFoundCode int = 404

/*
RegisterNotFound request not found

swagger:response registerNotFound
*/
type RegisterNotFound struct {
}

// NewRegisterNotFound creates RegisterNotFound with default headers values
func NewRegisterNotFound() *RegisterNotFound {

	return &RegisterNotFound{}
}

// WriteResponse to the client
func (o *RegisterNotFound) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(404)
}

// RegisterUnprocessableEntityCode is the HTTP code returned for type RegisterUnprocessableEntity
const RegisterUnprocessableEntityCode int = 422

/*
RegisterUnprocessableEntity password validation failure

swagger:response registerUnprocessableEntity
*/
type RegisterUnprocessableEntity struct {

	/*
	  In: Body
	*/
	Payload rest_model_zrok.ErrorMessage `json:"body,omitempty"`
}

// NewRegisterUnprocessableEntity creates RegisterUnprocessableEntity with default headers values
func NewRegisterUnprocessableEntity() *RegisterUnprocessableEntity {

	return &RegisterUnprocessableEntity{}
}

// WithPayload adds the payload to the register unprocessable entity response
func (o *RegisterUnprocessableEntity) WithPayload(payload rest_model_zrok.ErrorMessage) *RegisterUnprocessableEntity {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the register unprocessable entity response
func (o *RegisterUnprocessableEntity) SetPayload(payload rest_model_zrok.ErrorMessage) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *RegisterUnprocessableEntity) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(422)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

// RegisterInternalServerErrorCode is the HTTP code returned for type RegisterInternalServerError
const RegisterInternalServerErrorCode int = 500

/*
RegisterInternalServerError internal server error

swagger:response registerInternalServerError
*/
type RegisterInternalServerError struct {
}

// NewRegisterInternalServerError creates RegisterInternalServerError with default headers values
func NewRegisterInternalServerError() *RegisterInternalServerError {

	return &RegisterInternalServerError{}
}

// WriteResponse to the client
func (o *RegisterInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}
