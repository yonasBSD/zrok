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
    describe('AccessPrivateResponse', function() {
      beforeEach(function() {
        instance = new AgentagentGrpcagentproto.AccessPrivateResponse();
      });

      it('should create an instance of AccessPrivateResponse', function() {
        // TODO: update the code to test AccessPrivateResponse
        expect(instance).to.be.a(AgentagentGrpcagentproto.AccessPrivateResponse);
      });

      it('should have the property frontendToken (base name: "frontendToken")', function() {
        // TODO: update the code to test the property frontendToken
        expect(instance).to.have.property('frontendToken');
        // expect(instance.frontendToken).to.be(expectedValueLiteral);
      });

    });
  });

}));
