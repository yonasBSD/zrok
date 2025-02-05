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
 * @interface Frontend
 */
export interface Frontend {
    /**
     * 
     * @type {number}
     * @memberof Frontend
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Frontend
     */
    frontendToken?: string;
    /**
     * 
     * @type {string}
     * @memberof Frontend
     */
    shareToken?: string;
    /**
     * 
     * @type {string}
     * @memberof Frontend
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Frontend
     */
    zId?: string;
    /**
     * 
     * @type {number}
     * @memberof Frontend
     */
    createdAt?: number;
    /**
     * 
     * @type {number}
     * @memberof Frontend
     */
    updatedAt?: number;
}

/**
 * Check if a given object implements the Frontend interface.
 */
export function instanceOfFrontend(value: object): value is Frontend {
    return true;
}

export function FrontendFromJSON(json: any): Frontend {
    return FrontendFromJSONTyped(json, false);
}

export function FrontendFromJSONTyped(json: any, ignoreDiscriminator: boolean): Frontend {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'frontendToken': json['frontendToken'] == null ? undefined : json['frontendToken'],
        'shareToken': json['shareToken'] == null ? undefined : json['shareToken'],
        'description': json['description'] == null ? undefined : json['description'],
        'zId': json['zId'] == null ? undefined : json['zId'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
    };
}

export function FrontendToJSON(value?: Frontend | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'frontendToken': value['frontendToken'],
        'shareToken': value['shareToken'],
        'description': value['description'],
        'zId': value['zId'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}

