// Code generated by go-swagger; DO NOT EDIT.

package identity

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
)

// LoginReader is a Reader for the Login structure.
type LoginReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *LoginReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewLoginOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewLoginUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewLoginOK creates a LoginOK with default headers values
func NewLoginOK() *LoginOK {
	return &LoginOK{}
}

/* LoginOK describes a response with status code 200, with default header values.

login successful
*/
type LoginOK struct {
	Payload rest_model_zrok.LoginResponse
}

func (o *LoginOK) Error() string {
	return fmt.Sprintf("[POST /login][%d] loginOK  %+v", 200, o.Payload)
}
func (o *LoginOK) GetPayload() rest_model_zrok.LoginResponse {
	return o.Payload
}

func (o *LoginOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewLoginUnauthorized creates a LoginUnauthorized with default headers values
func NewLoginUnauthorized() *LoginUnauthorized {
	return &LoginUnauthorized{}
}

/* LoginUnauthorized describes a response with status code 401, with default header values.

invalid login
*/
type LoginUnauthorized struct {
}

func (o *LoginUnauthorized) Error() string {
	return fmt.Sprintf("[POST /login][%d] loginUnauthorized ", 401)
}

func (o *LoginUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}