/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.43
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
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
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.AuthorisationRequestResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AuthorisationRequestResponse', function() {
    it('should create an instance of AuthorisationRequestResponse', function() {
      // uncomment below and update the code to test AuthorisationRequestResponse
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be.a(YapilyApi.AuthorisationRequestResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property userUuid (base name: "userUuid")', function() {
      // uncomment below and update the code to test the property userUuid
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeToExpireInMillis (base name: "timeToExpireInMillis")', function() {
      // uncomment below and update the code to test the property timeToExpireInMillis
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property featureScope (base name: "featureScope")', function() {
      // uncomment below and update the code to test the property featureScope
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property authorisationUrl (base name: "authorisationUrl")', function() {
      // uncomment below and update the code to test the property authorisationUrl
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property consentToken (base name: "consentToken")', function() {
      // uncomment below and update the code to test the property consentToken
      //var instane = new YapilyApi.AuthorisationRequestResponse();
      //expect(instance).to.be();
    });

  });

}));
