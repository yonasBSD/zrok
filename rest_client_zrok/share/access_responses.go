// Code generated by go-swagger; DO NOT EDIT.

package share

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// AccessReader is a Reader for the Access structure.
type AccessReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *AccessReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 201:
		result := NewAccessCreated()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewAccessUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewAccessNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewAccessInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[POST /access] access", response, response.Code())
	}
}

// NewAccessCreated creates a AccessCreated with default headers values
func NewAccessCreated() *AccessCreated {
	return &AccessCreated{}
}

/*
AccessCreated describes a response with status code 201, with default header values.

access created
*/
type AccessCreated struct {
	Payload *AccessCreatedBody
}

// IsSuccess returns true when this access created response has a 2xx status code
func (o *AccessCreated) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this access created response has a 3xx status code
func (o *AccessCreated) IsRedirect() bool {
	return false
}

// IsClientError returns true when this access created response has a 4xx status code
func (o *AccessCreated) IsClientError() bool {
	return false
}

// IsServerError returns true when this access created response has a 5xx status code
func (o *AccessCreated) IsServerError() bool {
	return false
}

// IsCode returns true when this access created response a status code equal to that given
func (o *AccessCreated) IsCode(code int) bool {
	return code == 201
}

// Code gets the status code for the access created response
func (o *AccessCreated) Code() int {
	return 201
}

func (o *AccessCreated) Error() string {
	return fmt.Sprintf("[POST /access][%d] accessCreated  %+v", 201, o.Payload)
}

func (o *AccessCreated) String() string {
	return fmt.Sprintf("[POST /access][%d] accessCreated  %+v", 201, o.Payload)
}

func (o *AccessCreated) GetPayload() *AccessCreatedBody {
	return o.Payload
}

func (o *AccessCreated) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(AccessCreatedBody)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAccessUnauthorized creates a AccessUnauthorized with default headers values
func NewAccessUnauthorized() *AccessUnauthorized {
	return &AccessUnauthorized{}
}

/*
AccessUnauthorized describes a response with status code 401, with default header values.

unauthorized
*/
type AccessUnauthorized struct {
}

// IsSuccess returns true when this access unauthorized response has a 2xx status code
func (o *AccessUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this access unauthorized response has a 3xx status code
func (o *AccessUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this access unauthorized response has a 4xx status code
func (o *AccessUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this access unauthorized response has a 5xx status code
func (o *AccessUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this access unauthorized response a status code equal to that given
func (o *AccessUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the access unauthorized response
func (o *AccessUnauthorized) Code() int {
	return 401
}

func (o *AccessUnauthorized) Error() string {
	return fmt.Sprintf("[POST /access][%d] accessUnauthorized ", 401)
}

func (o *AccessUnauthorized) String() string {
	return fmt.Sprintf("[POST /access][%d] accessUnauthorized ", 401)
}

func (o *AccessUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewAccessNotFound creates a AccessNotFound with default headers values
func NewAccessNotFound() *AccessNotFound {
	return &AccessNotFound{}
}

/*
AccessNotFound describes a response with status code 404, with default header values.

not found
*/
type AccessNotFound struct {
}

// IsSuccess returns true when this access not found response has a 2xx status code
func (o *AccessNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this access not found response has a 3xx status code
func (o *AccessNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this access not found response has a 4xx status code
func (o *AccessNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this access not found response has a 5xx status code
func (o *AccessNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this access not found response a status code equal to that given
func (o *AccessNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the access not found response
func (o *AccessNotFound) Code() int {
	return 404
}

func (o *AccessNotFound) Error() string {
	return fmt.Sprintf("[POST /access][%d] accessNotFound ", 404)
}

func (o *AccessNotFound) String() string {
	return fmt.Sprintf("[POST /access][%d] accessNotFound ", 404)
}

func (o *AccessNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewAccessInternalServerError creates a AccessInternalServerError with default headers values
func NewAccessInternalServerError() *AccessInternalServerError {
	return &AccessInternalServerError{}
}

/*
AccessInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type AccessInternalServerError struct {
}

// IsSuccess returns true when this access internal server error response has a 2xx status code
func (o *AccessInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this access internal server error response has a 3xx status code
func (o *AccessInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this access internal server error response has a 4xx status code
func (o *AccessInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this access internal server error response has a 5xx status code
func (o *AccessInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this access internal server error response a status code equal to that given
func (o *AccessInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the access internal server error response
func (o *AccessInternalServerError) Code() int {
	return 500
}

func (o *AccessInternalServerError) Error() string {
	return fmt.Sprintf("[POST /access][%d] accessInternalServerError ", 500)
}

func (o *AccessInternalServerError) String() string {
	return fmt.Sprintf("[POST /access][%d] accessInternalServerError ", 500)
}

func (o *AccessInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

/*
AccessBody access body
swagger:model AccessBody
*/
type AccessBody struct {

	// env z Id
	EnvZID string `json:"envZId,omitempty"`

	// share token
	ShareToken string `json:"shareToken,omitempty"`
}

// Validate validates this access body
func (o *AccessBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this access body based on context it is used
func (o *AccessBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *AccessBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *AccessBody) UnmarshalBinary(b []byte) error {
	var res AccessBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

/*
AccessCreatedBody access created body
swagger:model AccessCreatedBody
*/
type AccessCreatedBody struct {

	// backend mode
	BackendMode string `json:"backendMode,omitempty"`

	// frontend token
	FrontendToken string `json:"frontendToken,omitempty"`
}

// Validate validates this access created body
func (o *AccessCreatedBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this access created body based on context it is used
func (o *AccessCreatedBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *AccessCreatedBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *AccessCreatedBody) UnmarshalBinary(b []byte) error {
	var res AccessCreatedBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
