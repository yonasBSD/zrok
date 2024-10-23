/*
 * agent/agentGrpc/agent.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.51
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The AccessDetail model module.
 * @module model/AccessDetail
 * @version version not set
 */
export class AccessDetail {
  /**
   * Constructs a new <code>AccessDetail</code>.
   * @alias module:model/AccessDetail
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccessDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessDetail} obj Optional instance to populate.
   * @return {module:model/AccessDetail} The populated <code>AccessDetail</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccessDetail();
      if (data.hasOwnProperty('frontendToken'))
        obj.frontendToken = ApiClient.convertToType(data['frontendToken'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('bindAddress'))
        obj.bindAddress = ApiClient.convertToType(data['bindAddress'], 'String');
      if (data.hasOwnProperty('responseHeaders'))
        obj.responseHeaders = ApiClient.convertToType(data['responseHeaders'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} frontendToken
 */
AccessDetail.prototype.frontendToken = undefined;

/**
 * @member {String} token
 */
AccessDetail.prototype.token = undefined;

/**
 * @member {String} bindAddress
 */
AccessDetail.prototype.bindAddress = undefined;

/**
 * @member {Array.<String>} responseHeaders
 */
AccessDetail.prototype.responseHeaders = undefined;

