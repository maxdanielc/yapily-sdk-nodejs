/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.30
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
    instance = new YapilyApi.ATMPostalAddress();
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

  describe('ATMPostalAddress', function() {
    it('should create an instance of ATMPostalAddress', function() {
      // uncomment below and update the code to test ATMPostalAddress
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be.a(YapilyApi.ATMPostalAddress);
    });

    it('should have the property addressLine (base name: "AddressLine")', function() {
      // uncomment below and update the code to test the property addressLine
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be();
    });

    it('should have the property buildingNumber (base name: "BuildingNumber")', function() {
      // uncomment below and update the code to test the property buildingNumber
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be();
    });

    it('should have the property countrySubDivision (base name: "CountrySubDivision")', function() {
      // uncomment below and update the code to test the property countrySubDivision
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be();
    });

    it('should have the property geoLocation (base name: "GeoLocation")', function() {
      // uncomment below and update the code to test the property geoLocation
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be();
    });

    it('should have the property postCode (base name: "PostCode")', function() {
      // uncomment below and update the code to test the property postCode
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "StreetName")', function() {
      // uncomment below and update the code to test the property streetName
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be();
    });

    it('should have the property townName (base name: "TownName")', function() {
      // uncomment below and update the code to test the property townName
      //var instane = new YapilyApi.ATMPostalAddress();
      //expect(instance).to.be();
    });

  });

}));
