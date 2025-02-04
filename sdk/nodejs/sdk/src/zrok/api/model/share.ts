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

import { RequestFile } from './models';
import { SparkDataSample } from './sparkDataSample';

export class Share {
    'shareToken'?: string;
    'zId'?: string;
    'shareMode'?: string;
    'backendMode'?: string;
    'frontendSelection'?: string;
    'frontendEndpoint'?: string;
    'backendProxyEndpoint'?: string;
    'reserved'?: boolean;
    'activity'?: Array<SparkDataSample>;
    'limited'?: boolean;
    'createdAt'?: number;
    'updatedAt'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "shareToken",
            "baseName": "shareToken",
            "type": "string"
        },
        {
            "name": "zId",
            "baseName": "zId",
            "type": "string"
        },
        {
            "name": "shareMode",
            "baseName": "shareMode",
            "type": "string"
        },
        {
            "name": "backendMode",
            "baseName": "backendMode",
            "type": "string"
        },
        {
            "name": "frontendSelection",
            "baseName": "frontendSelection",
            "type": "string"
        },
        {
            "name": "frontendEndpoint",
            "baseName": "frontendEndpoint",
            "type": "string"
        },
        {
            "name": "backendProxyEndpoint",
            "baseName": "backendProxyEndpoint",
            "type": "string"
        },
        {
            "name": "reserved",
            "baseName": "reserved",
            "type": "boolean"
        },
        {
            "name": "activity",
            "baseName": "activity",
            "type": "Array<SparkDataSample>"
        },
        {
            "name": "limited",
            "baseName": "limited",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Share.attributeTypeMap;
    }
}

