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
import type { Metrics } from './Metrics';
import {
    MetricsFromJSON,
    MetricsFromJSONTyped,
    MetricsToJSON,
    MetricsToJSONTyped,
} from './Metrics';

/**
 * 
 * @export
 * @interface GetSparklines200Response
 */
export interface GetSparklines200Response {
    /**
     * 
     * @type {Array<Metrics>}
     * @memberof GetSparklines200Response
     */
    sparklines?: Array<Metrics>;
}

/**
 * Check if a given object implements the GetSparklines200Response interface.
 */
export function instanceOfGetSparklines200Response(value: object): value is GetSparklines200Response {
    return true;
}

export function GetSparklines200ResponseFromJSON(json: any): GetSparklines200Response {
    return GetSparklines200ResponseFromJSONTyped(json, false);
}

export function GetSparklines200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSparklines200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'sparklines': json['sparklines'] == null ? undefined : ((json['sparklines'] as Array<any>).map(MetricsFromJSON)),
    };
}

export function GetSparklines200ResponseToJSON(json: any): GetSparklines200Response {
    return GetSparklines200ResponseToJSONTyped(json, false);
}

export function GetSparklines200ResponseToJSONTyped(value?: GetSparklines200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sparklines': value['sparklines'] == null ? undefined : ((value['sparklines'] as Array<any>).map(MetricsToJSON)),
    };
}

