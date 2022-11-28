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
 * The ConfigKMS model module.
 * @module model/ConfigKMS
 * @version 1.0
 */
class ConfigKMS {
    /**
     * Constructs a new <code>ConfigKMS</code>.
     * @alias module:model/ConfigKMS
     * @param cacheEnable {Boolean} 
     * @param seed {String} 
     * @param uri {String} 
     */
    constructor(cacheEnable, seed, uri) { 
        
        ConfigKMS.initialize(this, cacheEnable, seed, uri);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cacheEnable, seed, uri) { 
        obj['cache_enable'] = cacheEnable;
        obj['seed'] = seed;
        obj['uri'] = uri;
    }

    /**
     * Constructs a <code>ConfigKMS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigKMS} obj Optional instance to populate.
     * @return {module:model/ConfigKMS} The populated <code>ConfigKMS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigKMS();

            if (data.hasOwnProperty('cache_enable')) {
                obj['cache_enable'] = ApiClient.convertToType(data['cache_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('seed')) {
                obj['seed'] = ApiClient.convertToType(data['seed'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} cache_enable
 */
ConfigKMS.prototype['cache_enable'] = undefined;

/**
 * @member {String} seed
 */
ConfigKMS.prototype['seed'] = undefined;

/**
 * @member {String} uri
 */
ConfigKMS.prototype['uri'] = undefined;






export default ConfigKMS;

