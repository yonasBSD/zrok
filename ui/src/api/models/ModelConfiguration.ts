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
 * @interface ModelConfiguration
 */
export interface ModelConfiguration {
    /**
     * 
     * @type {string}
     * @memberof ModelConfiguration
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelConfiguration
     */
    touLink?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelConfiguration
     */
    newAccountLink?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    invitesOpen?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    requiresInviteToken?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelConfiguration
     */
    inviteTokenContact?: string;
}

/**
 * Check if a given object implements the ModelConfiguration interface.
 */
export function instanceOfModelConfiguration(value: object): value is ModelConfiguration {
    return true;
}

export function ModelConfigurationFromJSON(json: any): ModelConfiguration {
    return ModelConfigurationFromJSONTyped(json, false);
}

export function ModelConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : json['version'],
        'touLink': json['touLink'] == null ? undefined : json['touLink'],
        'newAccountLink': json['newAccountLink'] == null ? undefined : json['newAccountLink'],
        'invitesOpen': json['invitesOpen'] == null ? undefined : json['invitesOpen'],
        'requiresInviteToken': json['requiresInviteToken'] == null ? undefined : json['requiresInviteToken'],
        'inviteTokenContact': json['inviteTokenContact'] == null ? undefined : json['inviteTokenContact'],
    };
}

export function ModelConfigurationToJSON(json: any): ModelConfiguration {
    return ModelConfigurationToJSONTyped(json, false);
}

export function ModelConfigurationToJSONTyped(value?: ModelConfiguration | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': value['version'],
        'touLink': value['touLink'],
        'newAccountLink': value['newAccountLink'],
        'invitesOpen': value['invitesOpen'],
        'requiresInviteToken': value['requiresInviteToken'],
        'inviteTokenContact': value['inviteTokenContact'],
    };
}

