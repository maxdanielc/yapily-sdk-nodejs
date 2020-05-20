/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.188
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
    define(['ApiClient', 'model/AccountBalance', 'model/AccountIdentification', 'model/AccountName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountBalance'), require('./AccountIdentification'), require('./AccountName'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Account = factory(root.YapilyApi.ApiClient, root.YapilyApi.AccountBalance, root.YapilyApi.AccountIdentification, root.YapilyApi.AccountName);
  }
}(this, function(ApiClient, AccountBalance, AccountIdentification, AccountName) {
  'use strict';



  /**
   * The Account model module.
   * @module model/Account
   * @version 0.0.188
   */

  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('usageType')) {
        obj['usageType'] = ApiClient.convertToType(data['usageType'], 'String');
      }
      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('accountNames')) {
        obj['accountNames'] = ApiClient.convertToType(data['accountNames'], [AccountName]);
      }
      if (data.hasOwnProperty('accountIdentifications')) {
        obj['accountIdentifications'] = ApiClient.convertToType(data['accountIdentifications'], [AccountIdentification]);
      }
      if (data.hasOwnProperty('accountBalances')) {
        obj['accountBalances'] = ApiClient.convertToType(data['accountBalances'], [AccountBalance]);
      }
    }
    return obj;
  }

  /**
   * Account Id returned by the institution if present
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Product name as defined by the financial institution for this account
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * ISO 4217 currency code
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/Account.UsageTypeEnum} usageType
   */
  exports.prototype['usageType'] = undefined;
  /**
   * @member {module:model/Account.AccountTypeEnum} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * Name of the account as defined by the financial institution or the end user
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;
  /**
   * Specifications that might be provided by the institution - characteristics of the account - characteristics of the relevant card
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {Array.<module:model/AccountName>} accountNames
   */
  exports.prototype['accountNames'] = undefined;
  /**
   * @member {Array.<module:model/AccountIdentification>} accountIdentifications
   */
  exports.prototype['accountIdentifications'] = undefined;
  /**
   * @member {Array.<module:model/AccountBalance>} accountBalances
   */
  exports.prototype['accountBalances'] = undefined;


  /**
   * Allowed values for the <code>usageType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UsageTypeEnum = {
    /**
     * value: "PERSONAL"
     * @const
     */
    "PERSONAL": "PERSONAL",
    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };

  /**
   * Allowed values for the <code>accountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountTypeEnum = {
    /**
     * value: "CASH_TRADING"
     * @const
     */
    "CASH_TRADING": "CASH_TRADING",
    /**
     * value: "CASH_INCOME"
     * @const
     */
    "CASH_INCOME": "CASH_INCOME",
    /**
     * value: "CASH_PAYMENT"
     * @const
     */
    "CASH_PAYMENT": "CASH_PAYMENT",
    /**
     * value: "CHARGE_CARD"
     * @const
     */
    "CHARGE_CARD": "CHARGE_CARD",
    /**
     * value: "CHARGES"
     * @const
     */
    "CHARGES": "CHARGES",
    /**
     * value: "COMMISSION"
     * @const
     */
    "COMMISSION": "COMMISSION",
    /**
     * value: "CREDIT_CARD"
     * @const
     */
    "CREDIT_CARD": "CREDIT_CARD",
    /**
     * value: "CURRENT"
     * @const
     */
    "CURRENT": "CURRENT",
    /**
     * value: "E_MONEY"
     * @const
     */
    "E_MONEY": "E_MONEY",
    /**
     * value: "LIMITED_LIQUIDITY_SAVINGS_ACCOUNT"
     * @const
     */
    "LIMITED_LIQUIDITY_SAVINGS_ACCOUNT": "LIMITED_LIQUIDITY_SAVINGS_ACCOUNT",
    /**
     * value: "LOAN"
     * @const
     */
    "LOAN": "LOAN",
    /**
     * value: "MARGINAL_LENDING"
     * @const
     */
    "MARGINAL_LENDING": "MARGINAL_LENDING",
    /**
     * value: "MONEY_MARKET"
     * @const
     */
    "MONEY_MARKET": "MONEY_MARKET",
    /**
     * value: "MORTGAGE"
     * @const
     */
    "MORTGAGE": "MORTGAGE",
    /**
     * value: "NON_RESIDENT_EXTERNAL"
     * @const
     */
    "NON_RESIDENT_EXTERNAL": "NON_RESIDENT_EXTERNAL",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",
    /**
     * value: "OVERDRAFT"
     * @const
     */
    "OVERDRAFT": "OVERDRAFT",
    /**
     * value: "OVERNIGHT_DEPOSIT"
     * @const
     */
    "OVERNIGHT_DEPOSIT": "OVERNIGHT_DEPOSIT",
    /**
     * value: "PREPAID_CARD"
     * @const
     */
    "PREPAID_CARD": "PREPAID_CARD",
    /**
     * value: "SALARY"
     * @const
     */
    "SALARY": "SALARY",
    /**
     * value: "SAVINGS"
     * @const
     */
    "SAVINGS": "SAVINGS",
    /**
     * value: "SETTLEMENT"
     * @const
     */
    "SETTLEMENT": "SETTLEMENT",
    /**
     * value: "TAX"
     * @const
     */
    "TAX": "TAX",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };


  return exports;
}));


