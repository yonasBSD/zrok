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
import {ApiClient} from "../ApiClient";
import {AccessPrivateResponse} from '../model/AccessPrivateResponse';
import {ReleaseAccessResponse} from '../model/ReleaseAccessResponse';
import {ReleaseShareResponse} from '../model/ReleaseShareResponse';
import {RpcStatus} from '../model/RpcStatus';
import {SharePrivateResponse} from '../model/SharePrivateResponse';
import {SharePublicResponse} from '../model/SharePublicResponse';
import {StatusResponse} from '../model/StatusResponse';
import {VersionResponse} from '../model/VersionResponse';

/**
* Agent service.
* @module api/AgentApi
* @version version not set
*/
export class AgentApi {

    /**
    * Constructs a new AgentApi. 
    * @alias module:api/AgentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the agentAccessPrivate operation.
     * @callback moduleapi/AgentApi~agentAccessPrivateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessPrivateResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {String} opts.bindAddress 
     * @param {Boolean} opts.autoMode 
     * @param {String} opts.autoAddress 
     * @param {Number} opts.autoStartPort 
     * @param {Number} opts.autoEndPort 
     * @param {Array.<String>} opts.responseHeaders 
     * @param {module:api/AgentApi~agentAccessPrivateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    agentAccessPrivate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'token': opts['token'],'bindAddress': opts['bindAddress'],'autoMode': opts['autoMode'],'autoAddress': opts['autoAddress'],'autoStartPort': opts['autoStartPort'],'autoEndPort': opts['autoEndPort'],'responseHeaders': this.apiClient.buildCollectionParam(opts['responseHeaders'], 'multi')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AccessPrivateResponse;

      return this.apiClient.callApi(
        '/v1/agent/accessPrivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the agentReleaseAccess operation.
     * @callback moduleapi/AgentApi~agentReleaseAccessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReleaseAccessResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.frontendToken 
     * @param {module:api/AgentApi~agentReleaseAccessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    agentReleaseAccess(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'frontendToken': opts['frontendToken']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReleaseAccessResponse;

      return this.apiClient.callApi(
        '/v1/agent/releaseAccess', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the agentReleaseShare operation.
     * @callback moduleapi/AgentApi~agentReleaseShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReleaseShareResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {module:api/AgentApi~agentReleaseShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    agentReleaseShare(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'token': opts['token']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReleaseShareResponse;

      return this.apiClient.callApi(
        '/v1/agent/releaseShare', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the agentSharePrivate operation.
     * @callback moduleapi/AgentApi~agentSharePrivateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SharePrivateResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.target 
     * @param {String} opts.backendMode 
     * @param {Boolean} opts.insecure 
     * @param {Boolean} opts.closed 
     * @param {Array.<String>} opts.accessGrants 
     * @param {module:api/AgentApi~agentSharePrivateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    agentSharePrivate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'target': opts['target'],'backendMode': opts['backendMode'],'insecure': opts['insecure'],'closed': opts['closed'],'accessGrants': this.apiClient.buildCollectionParam(opts['accessGrants'], 'multi')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SharePrivateResponse;

      return this.apiClient.callApi(
        '/v1/agent/sharePrivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the agentSharePublic operation.
     * @callback moduleapi/AgentApi~agentSharePublicCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SharePublicResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.target 
     * @param {Array.<String>} opts.basicAuth 
     * @param {Array.<String>} opts.frontendSelection 
     * @param {String} opts.backendMode 
     * @param {Boolean} opts.insecure 
     * @param {String} opts.oauthProvider 
     * @param {Array.<String>} opts.oauthEmailAddressPatterns 
     * @param {String} opts.oauthCheckInterval 
     * @param {Boolean} opts.closed 
     * @param {Array.<String>} opts.accessGrants 
     * @param {module:api/AgentApi~agentSharePublicCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    agentSharePublic(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'target': opts['target'],'basicAuth': this.apiClient.buildCollectionParam(opts['basicAuth'], 'multi'),'frontendSelection': this.apiClient.buildCollectionParam(opts['frontendSelection'], 'multi'),'backendMode': opts['backendMode'],'insecure': opts['insecure'],'oauthProvider': opts['oauthProvider'],'oauthEmailAddressPatterns': this.apiClient.buildCollectionParam(opts['oauthEmailAddressPatterns'], 'multi'),'oauthCheckInterval': opts['oauthCheckInterval'],'closed': opts['closed'],'accessGrants': this.apiClient.buildCollectionParam(opts['accessGrants'], 'multi')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SharePublicResponse;

      return this.apiClient.callApi(
        '/v1/agent/sharePublic', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the agentStatus operation.
     * @callback moduleapi/AgentApi~agentStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AgentApi~agentStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    agentStatus(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StatusResponse;

      return this.apiClient.callApi(
        '/v1/agent/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the agentVersion operation.
     * @callback moduleapi/AgentApi~agentVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AgentApi~agentVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    agentVersion(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VersionResponse;

      return this.apiClient.callApi(
        '/v1/agent/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}