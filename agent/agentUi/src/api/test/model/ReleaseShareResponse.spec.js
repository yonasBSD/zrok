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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AgentagentGrpcagentproto);
  }
}(this, function(expect, AgentagentGrpcagentproto) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ReleaseShareResponse', function() {
      beforeEach(function() {
        instance = new AgentagentGrpcagentproto.ReleaseShareResponse();
      });

      it('should create an instance of ReleaseShareResponse', function() {
        // TODO: update the code to test ReleaseShareResponse
        expect(instance).to.be.a(AgentagentGrpcagentproto.ReleaseShareResponse);
      });

    });
  });

}));
