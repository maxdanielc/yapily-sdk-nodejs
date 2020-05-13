/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.186
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ConsentDeleteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConsentDeleteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.UserDeleteResponse = factory(root.YapilyApi.ApiClient, root.YapilyApi.ConsentDeleteResponse);
  }
}(this, function(ApiClient, ConsentDeleteResponse) {
  'use strict';



  /**
   * The UserDeleteResponse model module.
   * @module model/UserDeleteResponse
   * @version 0.0.186
   */

  /**
   * Constructs a new <code>UserDeleteResponse</code>.
   * @alias module:model/UserDeleteResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>UserDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDeleteResponse} obj Optional instance to populate.
   * @return {module:model/UserDeleteResponse} The populated <code>UserDeleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('deleteStatus')) {
        obj['deleteStatus'] = ApiClient.convertToType(data['deleteStatus'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('userConsents')) {
        obj['userConsents'] = ApiClient.convertToType(data['userConsents'], [ConsentDeleteResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/UserDeleteResponse.DeleteStatusEnum} deleteStatus
   */
  exports.prototype['deleteStatus'] = undefined;
  /**
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * @member {Array.<module:model/ConsentDeleteResponse>} userConsents
   */
  exports.prototype['userConsents'] = undefined;


  /**
   * Allowed values for the <code>deleteStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeleteStatusEnum = {
    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"  };


  return exports;
}));


