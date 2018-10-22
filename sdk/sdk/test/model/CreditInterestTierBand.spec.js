/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.38
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
    instance = new YapilyApi.CreditInterestTierBand();
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

  describe('CreditInterestTierBand', function() {
    it('should create an instance of CreditInterestTierBand', function() {
      // uncomment below and update the code to test CreditInterestTierBand
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be.a(YapilyApi.CreditInterestTierBand);
    });

    it('should have the property AER (base name: "AER")', function() {
      // uncomment below and update the code to test the property AER
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property applicationFrequency (base name: "ApplicationFrequency")', function() {
      // uncomment below and update the code to test the property applicationFrequency
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property bankInterestRateType (base name: "BankInterestRateType")', function() {
      // uncomment below and update the code to test the property bankInterestRateType
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property calculationFrequency (base name: "CalculationFrequency")', function() {
      // uncomment below and update the code to test the property calculationFrequency
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property depositInterestAppliedCoverage (base name: "DepositInterestAppliedCoverage")', function() {
      // uncomment below and update the code to test the property depositInterestAppliedCoverage
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property fixedVariableInterestRateType (base name: "FixedVariableInterestRateType")', function() {
      // uncomment below and update the code to test the property fixedVariableInterestRateType
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property identification (base name: "Identification")', function() {
      // uncomment below and update the code to test the property identification
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property otherApplicationFrequency (base name: "OtherApplicationFrequency")', function() {
      // uncomment below and update the code to test the property otherApplicationFrequency
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property otherBankInterestType (base name: "OtherBankInterestType")', function() {
      // uncomment below and update the code to test the property otherBankInterestType
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property otherCalculationFrequency (base name: "OtherCalculationFrequency")', function() {
      // uncomment below and update the code to test the property otherCalculationFrequency
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property tierValueMaximum (base name: "TierValueMaximum")', function() {
      // uncomment below and update the code to test the property tierValueMaximum
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

    it('should have the property tierValueMinimum (base name: "TierValueMinimum")', function() {
      // uncomment below and update the code to test the property tierValueMinimum
      //var instane = new YapilyApi.CreditInterestTierBand();
      //expect(instance).to.be();
    });

  });

}));
