/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.134
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
    instance = new YapilyApi.Eligibility();
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

  describe('Eligibility', function() {
    it('should create an instance of Eligibility', function() {
      // uncomment below and update the code to test Eligibility
      //var instane = new YapilyApi.Eligibility();
      //expect(instance).to.be.a(YapilyApi.Eligibility);
    });

    it('should have the property ageEligibility (base name: "AgeEligibility")', function() {
      // uncomment below and update the code to test the property ageEligibility
      //var instane = new YapilyApi.Eligibility();
      //expect(instance).to.be();
    });

    it('should have the property creditCheck (base name: "CreditCheck")', function() {
      // uncomment below and update the code to test the property creditCheck
      //var instane = new YapilyApi.Eligibility();
      //expect(instance).to.be();
    });

    it('should have the property iDVerificationCheck (base name: "IDVerificationCheck")', function() {
      // uncomment below and update the code to test the property iDVerificationCheck
      //var instane = new YapilyApi.Eligibility();
      //expect(instance).to.be();
    });

    it('should have the property otherEligibility (base name: "OtherEligibility")', function() {
      // uncomment below and update the code to test the property otherEligibility
      //var instane = new YapilyApi.Eligibility();
      //expect(instance).to.be();
    });

    it('should have the property residencyEligibility (base name: "ResidencyEligibility")', function() {
      // uncomment below and update the code to test the property residencyEligibility
      //var instane = new YapilyApi.Eligibility();
      //expect(instance).to.be();
    });

  });

}));
