/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.139
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
    instance = new YapilyApi.AccountBalance();
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

  describe('AccountBalance', function() {
    it('should create an instance of AccountBalance', function() {
      // uncomment below and update the code to test AccountBalance
      //var instane = new YapilyApi.AccountBalance();
      //expect(instance).to.be.a(YapilyApi.AccountBalance);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

    it('should have the property dateTime (base name: "dateTime")', function() {
      // uncomment below and update the code to test the property dateTime
      //var instane = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

    it('should have the property balanceAmount (base name: "balanceAmount")', function() {
      // uncomment below and update the code to test the property balanceAmount
      //var instane = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

    it('should have the property creditLineIncluded (base name: "creditLineIncluded")', function() {
      // uncomment below and update the code to test the property creditLineIncluded
      //var instane = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

    it('should have the property creditLines (base name: "creditLines")', function() {
      // uncomment below and update the code to test the property creditLines
      //var instane = new YapilyApi.AccountBalance();
      //expect(instance).to.be();
    });

  });

}));
