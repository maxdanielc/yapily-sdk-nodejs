/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.185
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.CreditInterestCreditInterestEligibility();
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

  describe('CreditInterestCreditInterestEligibility', function() {
    it('should create an instance of CreditInterestCreditInterestEligibility', function() {
      // uncomment below and update the code to test CreditInterestCreditInterestEligibility
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be.a(YapilyApi.CreditInterestCreditInterestEligibility);
    });

    it('should have the property amount (base name: "Amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

    it('should have the property indicator (base name: "Indicator")', function() {
      // uncomment below and update the code to test the property indicator
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

    it('should have the property otherType (base name: "OtherType")', function() {
      // uncomment below and update the code to test the property otherType
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "Period")', function() {
      // uncomment below and update the code to test the property period
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

    it('should have the property textual (base name: "Textual")', function() {
      // uncomment below and update the code to test the property textual
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new YapilyApi.CreditInterestCreditInterestEligibility();
      //expect(instance).to.be();
    });

  });

}));
