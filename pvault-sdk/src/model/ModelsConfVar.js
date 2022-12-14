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
 * The ModelsConfVar model module.
 * @module model/ModelsConfVar
 * @version 1.0
 */
class ModelsConfVar {
    /**
     * Constructs a new <code>ModelsConfVar</code>.
     * @alias module:model/ModelsConfVar
     * @param name {String} The name of the configuration variable.
     * @param value {Object} The value of the configuration variable.
     * @param defaultValue {Object} The default value of the configuration variable.
     */
    constructor(name, value, defaultValue) { 
        
        ModelsConfVar.initialize(this, name, value, defaultValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value, defaultValue) { 
        obj['name'] = name;
        obj['value'] = value;
        obj['default_value'] = defaultValue;
    }

    /**
     * Constructs a <code>ModelsConfVar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsConfVar} obj Optional instance to populate.
     * @return {module:model/ModelsConfVar} The populated <code>ModelsConfVar</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsConfVar();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
            if (data.hasOwnProperty('default_value')) {
                obj['default_value'] = ApiClient.convertToType(data['default_value'], Object);
            }
        }
        return obj;
    }


}

/**
 * The name of the configuration variable.
 * @member {String} name
 */
ModelsConfVar.prototype['name'] = undefined;

/**
 * The value of the configuration variable.
 * @member {Object} value
 */
ModelsConfVar.prototype['value'] = undefined;

/**
 * The default value of the configuration variable.
 * @member {Object} default_value
 */
ModelsConfVar.prototype['default_value'] = undefined;






export default ModelsConfVar;

