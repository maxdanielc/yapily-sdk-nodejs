/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.163
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OtherResidencyType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OtherResidencyType'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ResidencyEligibility = factory(root.YapilyApi.ApiClient, root.YapilyApi.OtherResidencyType);
  }
}(this, function(ApiClient, OtherResidencyType) {
  'use strict';



  /**
   * The ResidencyEligibility model module.
   * @module model/ResidencyEligibility
   * @version 0.0.163
   */

  /**
   * Constructs a new <code>ResidencyEligibility</code>.
   * Countries in which an accountholder can reside and, therefore, be eligible to open an account
   * @alias module:model/ResidencyEligibility
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ResidencyEligibility</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResidencyEligibility} obj Optional instance to populate.
   * @return {module:model/ResidencyEligibility} The populated <code>ResidencyEligibility</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
      }
      if (data.hasOwnProperty('OtherResidencyType')) {
        obj['OtherResidencyType'] = OtherResidencyType.constructFromObject(data['OtherResidencyType']);
      }
      if (data.hasOwnProperty('ResidencyIncluded')) {
        obj['ResidencyIncluded'] = ApiClient.convertToType(data['ResidencyIncluded'], ['String']);
      }
      if (data.hasOwnProperty('ResidencyType')) {
        obj['ResidencyType'] = ApiClient.convertToType(data['ResidencyType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {module:model/OtherResidencyType} OtherResidencyType
   */
  exports.prototype['OtherResidencyType'] = undefined;
  /**
   * @member {Array.<String>} ResidencyIncluded
   */
  exports.prototype['ResidencyIncluded'] = undefined;
  /**
   * @member {module:model/ResidencyEligibility.ResidencyTypeEnum} ResidencyType
   */
  exports.prototype['ResidencyType'] = undefined;


  /**
   * Allowed values for the <code>ResidencyType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResidencyTypeEnum = {
    /**
     * value: "Householder"
     * @const
     */
    "Householder": "Householder",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"  };


  return exports;
}));


