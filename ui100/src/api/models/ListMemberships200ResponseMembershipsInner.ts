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
 * @interface ListMemberships200ResponseMembershipsInner
 */
export interface ListMemberships200ResponseMembershipsInner {
    /**
     * 
     * @type {string}
     * @memberof ListMemberships200ResponseMembershipsInner
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof ListMemberships200ResponseMembershipsInner
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ListMemberships200ResponseMembershipsInner
     */
    admin?: boolean;
}

/**
 * Check if a given object implements the ListMemberships200ResponseMembershipsInner interface.
 */
export function instanceOfListMemberships200ResponseMembershipsInner(value: object): value is ListMemberships200ResponseMembershipsInner {
    return true;
}

export function ListMemberships200ResponseMembershipsInnerFromJSON(json: any): ListMemberships200ResponseMembershipsInner {
    return ListMemberships200ResponseMembershipsInnerFromJSONTyped(json, false);
}

export function ListMemberships200ResponseMembershipsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListMemberships200ResponseMembershipsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : json['token'],
        'description': json['description'] == null ? undefined : json['description'],
        'admin': json['admin'] == null ? undefined : json['admin'],
    };
}

export function ListMemberships200ResponseMembershipsInnerToJSON(value?: ListMemberships200ResponseMembershipsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
        'description': value['description'],
        'admin': value['admin'],
    };
}

