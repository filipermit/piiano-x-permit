/**
 * Piiano Vault REST API
 * --- sidebar_position: 1 sidebar_label: Overview slug: / ---  # Introduction  The Piiano Vault REST API enables you to access and manage collections, objects, tokens, users, policies, and other resources within Piiano Vault in a simple, programmatic way using conventional HTTP requests and standard HTTP response codes.  The API follows RESTful conventions when possible, with most operations performed by `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` requests. Request and response bodies are [JSON-encoded](https://www.json.org/json-en.html). However, for collection operations, an SQL-like [PVSchema](/guides/manage-collections-and-schemas/reference/pvschema) encoding is available.  This API reference provides details for each operation available in the API.  When you install a local copy of Vault, you can try each operation using **Send API request**.  An OpenAPI specification is available in [YAML](@site/static/assets/openapi.yaml) and [JSON](@site/static/assets/openapi.json) formats and can be used to generate client code for the API. 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ConfigMigration model module.
 * @module model/ConfigMigration
 * @version 1.0
 */
class ConfigMigration {
    /**
     * Constructs a new <code>ConfigMigration</code>.
     * @alias module:model/ConfigMigration
     * @param autoRun {Boolean} 
     * @param enableRetries {Boolean} 
     * @param initialWaitBetweenRetries {Number} 
     * @param maxRetries {Number} 
     * @param maxWaitBetweenRetries {Number} 
     */
    constructor(autoRun, enableRetries, initialWaitBetweenRetries, maxRetries, maxWaitBetweenRetries) { 
        
        ConfigMigration.initialize(this, autoRun, enableRetries, initialWaitBetweenRetries, maxRetries, maxWaitBetweenRetries);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, autoRun, enableRetries, initialWaitBetweenRetries, maxRetries, maxWaitBetweenRetries) { 
        obj['auto_run'] = autoRun;
        obj['enable_retries'] = enableRetries;
        obj['initial_wait_between_retries'] = initialWaitBetweenRetries;
        obj['max_retries'] = maxRetries;
        obj['max_wait_between_retries'] = maxWaitBetweenRetries;
    }

    /**
     * Constructs a <code>ConfigMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigMigration} obj Optional instance to populate.
     * @return {module:model/ConfigMigration} The populated <code>ConfigMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigMigration();

            if (data.hasOwnProperty('auto_run')) {
                obj['auto_run'] = ApiClient.convertToType(data['auto_run'], 'Boolean');
            }
            if (data.hasOwnProperty('enable_retries')) {
                obj['enable_retries'] = ApiClient.convertToType(data['enable_retries'], 'Boolean');
            }
            if (data.hasOwnProperty('initial_wait_between_retries')) {
                obj['initial_wait_between_retries'] = ApiClient.convertToType(data['initial_wait_between_retries'], 'Number');
            }
            if (data.hasOwnProperty('max_retries')) {
                obj['max_retries'] = ApiClient.convertToType(data['max_retries'], 'Number');
            }
            if (data.hasOwnProperty('max_wait_between_retries')) {
                obj['max_wait_between_retries'] = ApiClient.convertToType(data['max_wait_between_retries'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} auto_run
 */
ConfigMigration.prototype['auto_run'] = undefined;

/**
 * @member {Boolean} enable_retries
 */
ConfigMigration.prototype['enable_retries'] = undefined;

/**
 * @member {Number} initial_wait_between_retries
 */
ConfigMigration.prototype['initial_wait_between_retries'] = undefined;

/**
 * @member {Number} max_retries
 */
ConfigMigration.prototype['max_retries'] = undefined;

/**
 * @member {Number} max_wait_between_retries
 */
ConfigMigration.prototype['max_wait_between_retries'] = undefined;






export default ConfigMigration;

