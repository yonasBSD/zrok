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
 * The ProtobufAny model module.
 * @module model/ProtobufAny
 * @version version not set
 */
export class ProtobufAny {
  /**
   * Constructs a new <code>ProtobufAny</code>.
   * @alias module:model/ProtobufAny
   * @class
   * @extends Object
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProtobufAny</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProtobufAny} obj Optional instance to populate.
   * @return {module:model/ProtobufAny} The populated <code>ProtobufAny</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProtobufAny();
      ApiClient.constructFromObject(data, obj, 'Object');
    }
    return obj;
  }
}
