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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ATMOpenData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ATMOpenData'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ATMOpenDataResponse = factory(root.YapilyApi.ApiClient, root.YapilyApi.ATMOpenData);
  }
}(this, function(ApiClient, ATMOpenData) {
  'use strict';




  /**
   * The ATMOpenDataResponse model module.
   * @module model/ATMOpenDataResponse
   * @version 0.0.160
   */

  /**
   * Constructs a new <code>ATMOpenDataResponse</code>.
   * @alias module:model/ATMOpenDataResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ATMOpenDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ATMOpenDataResponse} obj Optional instance to populate.
   * @return {module:model/ATMOpenDataResponse} The populated <code>ATMOpenDataResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [ATMOpenData]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ATMOpenData>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


