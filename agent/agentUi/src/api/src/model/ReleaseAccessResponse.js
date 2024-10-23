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
 * The ReleaseAccessResponse model module.
 * @module model/ReleaseAccessResponse
 * @version version not set
 */
export class ReleaseAccessResponse {
  /**
   * Constructs a new <code>ReleaseAccessResponse</code>.
   * @alias module:model/ReleaseAccessResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReleaseAccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReleaseAccessResponse} obj Optional instance to populate.
   * @return {module:model/ReleaseAccessResponse} The populated <code>ReleaseAccessResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReleaseAccessResponse();
    }
    return obj;
  }
}
