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
 * @interface VerifyRequest
 */
export interface VerifyRequest {
    /**
     * 
     * @type {string}
     * @memberof VerifyRequest
     */
    registerToken?: string;
}

/**
 * Check if a given object implements the VerifyRequest interface.
 */
export function instanceOfVerifyRequest(value: object): value is VerifyRequest {
    return true;
}

export function VerifyRequestFromJSON(json: any): VerifyRequest {
    return VerifyRequestFromJSONTyped(json, false);
}

export function VerifyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'registerToken': json['registerToken'] == null ? undefined : json['registerToken'],
    };
}

export function VerifyRequestToJSON(json: any): VerifyRequest {
    return VerifyRequestToJSONTyped(json, false);
}

export function VerifyRequestToJSONTyped(value?: VerifyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'registerToken': value['registerToken'],
    };
}

