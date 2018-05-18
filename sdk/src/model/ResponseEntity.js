/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.5
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ResponseEntity = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResponseEntity model module.
   * @module model/ResponseEntity
   * @version 0.0.5
   */

  /**
   * Constructs a new <code>ResponseEntity</code>.
   * @alias module:model/ResponseEntity
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ResponseEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseEntity} obj Optional instance to populate.
   * @return {module:model/ResponseEntity} The populated <code>ResponseEntity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], Object);
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'String');
      }
      if (data.hasOwnProperty('statusCodeValue')) {
        obj['statusCodeValue'] = ApiClient.convertToType(data['statusCodeValue'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Object} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {module:model/ResponseEntity.StatusCodeEnum} statusCode
   */
  exports.prototype['statusCode'] = undefined;
  /**
   * @member {Number} statusCodeValue
   */
  exports.prototype['statusCodeValue'] = undefined;


  /**
   * Allowed values for the <code>statusCode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusCodeEnum = {
    /**
     * value: "100"
     * @const
     */
    "100": "100",
    /**
     * value: "101"
     * @const
     */
    "101": "101",
    /**
     * value: "102"
     * @const
     */
    "102": "102",
    /**
     * value: "103"
     * @const
     */
    "103": "103",
    /**
     * value: "200"
     * @const
     */
    "200": "200",
    /**
     * value: "201"
     * @const
     */
    "201": "201",
    /**
     * value: "202"
     * @const
     */
    "202": "202",
    /**
     * value: "203"
     * @const
     */
    "203": "203",
    /**
     * value: "204"
     * @const
     */
    "204": "204",
    /**
     * value: "205"
     * @const
     */
    "205": "205",
    /**
     * value: "206"
     * @const
     */
    "206": "206",
    /**
     * value: "207"
     * @const
     */
    "207": "207",
    /**
     * value: "208"
     * @const
     */
    "208": "208",
    /**
     * value: "226"
     * @const
     */
    "226": "226",
    /**
     * value: "300"
     * @const
     */
    "300": "300",
    /**
     * value: "301"
     * @const
     */
    "301": "301",
    /**
     * value: "302"
     * @const
     */
    "302": "302",
    /**
     * value: "303"
     * @const
     */
    "303": "303",
    /**
     * value: "304"
     * @const
     */
    "304": "304",
    /**
     * value: "305"
     * @const
     */
    "305": "305",
    /**
     * value: "307"
     * @const
     */
    "307": "307",
    /**
     * value: "308"
     * @const
     */
    "308": "308",
    /**
     * value: "400"
     * @const
     */
    "400": "400",
    /**
     * value: "401"
     * @const
     */
    "401": "401",
    /**
     * value: "402"
     * @const
     */
    "402": "402",
    /**
     * value: "403"
     * @const
     */
    "403": "403",
    /**
     * value: "404"
     * @const
     */
    "404": "404",
    /**
     * value: "405"
     * @const
     */
    "405": "405",
    /**
     * value: "406"
     * @const
     */
    "406": "406",
    /**
     * value: "407"
     * @const
     */
    "407": "407",
    /**
     * value: "408"
     * @const
     */
    "408": "408",
    /**
     * value: "409"
     * @const
     */
    "409": "409",
    /**
     * value: "410"
     * @const
     */
    "410": "410",
    /**
     * value: "411"
     * @const
     */
    "411": "411",
    /**
     * value: "412"
     * @const
     */
    "412": "412",
    /**
     * value: "413"
     * @const
     */
    "413": "413",
    /**
     * value: "414"
     * @const
     */
    "414": "414",
    /**
     * value: "415"
     * @const
     */
    "415": "415",
    /**
     * value: "416"
     * @const
     */
    "416": "416",
    /**
     * value: "417"
     * @const
     */
    "417": "417",
    /**
     * value: "418"
     * @const
     */
    "418": "418",
    /**
     * value: "419"
     * @const
     */
    "419": "419",
    /**
     * value: "420"
     * @const
     */
    "420": "420",
    /**
     * value: "421"
     * @const
     */
    "421": "421",
    /**
     * value: "422"
     * @const
     */
    "422": "422",
    /**
     * value: "423"
     * @const
     */
    "423": "423",
    /**
     * value: "424"
     * @const
     */
    "424": "424",
    /**
     * value: "426"
     * @const
     */
    "426": "426",
    /**
     * value: "428"
     * @const
     */
    "428": "428",
    /**
     * value: "429"
     * @const
     */
    "429": "429",
    /**
     * value: "431"
     * @const
     */
    "431": "431",
    /**
     * value: "451"
     * @const
     */
    "451": "451",
    /**
     * value: "500"
     * @const
     */
    "500": "500",
    /**
     * value: "501"
     * @const
     */
    "501": "501",
    /**
     * value: "502"
     * @const
     */
    "502": "502",
    /**
     * value: "503"
     * @const
     */
    "503": "503",
    /**
     * value: "504"
     * @const
     */
    "504": "504",
    /**
     * value: "505"
     * @const
     */
    "505": "505",
    /**
     * value: "506"
     * @const
     */
    "506": "506",
    /**
     * value: "507"
     * @const
     */
    "507": "507",
    /**
     * value: "508"
     * @const
     */
    "508": "508",
    /**
     * value: "509"
     * @const
     */
    "509": "509",
    /**
     * value: "510"
     * @const
     */
    "510": "510",
    /**
     * value: "511"
     * @const
     */
    "511": "511"  };


  return exports;
}));

