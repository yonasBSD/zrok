/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChangePasswordRequest
 */
export interface ChangePasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    oldPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    newPassword?: string;
}

/**
 * Check if a given object implements the ChangePasswordRequest interface.
 */
export function instanceOfChangePasswordRequest(value: object): value is ChangePasswordRequest {
    return true;
}

export function ChangePasswordRequestFromJSON(json: any): ChangePasswordRequest {
    return ChangePasswordRequestFromJSONTyped(json, false);
}

export function ChangePasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangePasswordRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'oldPassword': json['oldPassword'] == null ? undefined : json['oldPassword'],
        'newPassword': json['newPassword'] == null ? undefined : json['newPassword'],
    };
}

export function ChangePasswordRequestToJSON(json: any): ChangePasswordRequest {
    return ChangePasswordRequestToJSONTyped(json, false);
}

export function ChangePasswordRequestToJSONTyped(value?: ChangePasswordRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'oldPassword': value['oldPassword'],
        'newPassword': value['newPassword'],
    };
}

