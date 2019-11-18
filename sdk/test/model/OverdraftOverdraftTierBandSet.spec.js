/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.160
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
    instance = new YapilyApi.OverdraftOverdraftTierBandSet();
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

  describe('OverdraftOverdraftTierBandSet', function() {
    it('should create an instance of OverdraftOverdraftTierBandSet', function() {
      // uncomment below and update the code to test OverdraftOverdraftTierBandSet
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be.a(YapilyApi.OverdraftOverdraftTierBandSet);
    });

    it('should have the property authorisedIndicator (base name: "AuthorisedIndicator")', function() {
      // uncomment below and update the code to test the property authorisedIndicator
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

    it('should have the property bufferAmount (base name: "BufferAmount")', function() {
      // uncomment below and update the code to test the property bufferAmount
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

    it('should have the property identification (base name: "Identification")', function() {
      // uncomment below and update the code to test the property identification
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

    it('should have the property minimumArrangedOverdraftAmount (base name: "MinimumArrangedOverdraftAmount")', function() {
      // uncomment below and update the code to test the property minimumArrangedOverdraftAmount
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

    it('should have the property overdraftFeesCharges (base name: "OverdraftFeesCharges")', function() {
      // uncomment below and update the code to test the property overdraftFeesCharges
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

    it('should have the property overdraftTierBand (base name: "OverdraftTierBand")', function() {
      // uncomment below and update the code to test the property overdraftTierBand
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

    it('should have the property overdraftType (base name: "OverdraftType")', function() {
      // uncomment below and update the code to test the property overdraftType
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

    it('should have the property tierBandMethod (base name: "TierBandMethod")', function() {
      // uncomment below and update the code to test the property tierBandMethod
      //var instane = new YapilyApi.OverdraftOverdraftTierBandSet();
      //expect(instance).to.be();
    });

  });

}));
