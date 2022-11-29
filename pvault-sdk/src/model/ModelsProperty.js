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
 * The ModelsProperty model module.
 * @module model/ModelsProperty
 * @version 1.0
 */
class ModelsProperty {
    /**
     * Constructs a new <code>ModelsProperty</code>.
     * @alias module:model/ModelsProperty
     * @param name {String} The name of the property. Must be unique.
     * @param piiTypeName {String} The name of the data type of the property.
     */
    constructor(name, piiTypeName) { 
        
        ModelsProperty.initialize(this, name, piiTypeName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, piiTypeName) { 
        obj['name'] = name;
        obj['pii_type_name'] = piiTypeName;
    }

    /**
     * Constructs a <code>ModelsProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsProperty} obj Optional instance to populate.
     * @return {module:model/ModelsProperty} The populated <code>ModelsProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsProperty();

            if (data.hasOwnProperty('creation_time')) {
                obj['creation_time'] = ApiClient.convertToType(data['creation_time'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('is_builtin')) {
                obj['is_builtin'] = ApiClient.convertToType(data['is_builtin'], 'Boolean');
            }
            if (data.hasOwnProperty('is_encrypted')) {
                obj['is_encrypted'] = ApiClient.convertToType(data['is_encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('is_index')) {
                obj['is_index'] = ApiClient.convertToType(data['is_index'], 'Boolean');
            }
            if (data.hasOwnProperty('is_nullable')) {
                obj['is_nullable'] = ApiClient.convertToType(data['is_nullable'], 'Boolean');
            }
            if (data.hasOwnProperty('is_readonly')) {
                obj['is_readonly'] = ApiClient.convertToType(data['is_readonly'], 'Boolean');
            }
            if (data.hasOwnProperty('is_unique')) {
                obj['is_unique'] = ApiClient.convertToType(data['is_unique'], 'Boolean');
            }
            if (data.hasOwnProperty('modification_time')) {
                obj['modification_time'] = ApiClient.convertToType(data['modification_time'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pii_type_name')) {
                obj['pii_type_name'] = ApiClient.convertToType(data['pii_type_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The time when the property was created, in RFC3339 format.
 * @member {Date} creation_time
 */
ModelsProperty.prototype['creation_time'] = undefined;

/**
 * The description of the property. If not provided, is set to an empty `string`.
 * @member {String} description
 */
ModelsProperty.prototype['description'] = undefined;

/**
 * Whether the property is created by Vault (or by the user).
 * @member {Boolean} is_builtin
 * @default false
 */
ModelsProperty.prototype['is_builtin'] = false;

/**
 * Whether the value is stored encrypted.
 * @member {Boolean} is_encrypted
 * @default true
 */
ModelsProperty.prototype['is_encrypted'] = true;

/**
 * Whether the backend storage is optimized for searches on this property.
 * @member {Boolean} is_index
 * @default false
 */
ModelsProperty.prototype['is_index'] = false;

/**
 * Whether the value of the property can be removed (set to null).
 * @member {Boolean} is_nullable
 * @default false
 */
ModelsProperty.prototype['is_nullable'] = false;

/**
 * Whether the user can modify values of this property. Ignored for user define properties.
 * @member {Boolean} is_readonly
 * @default false
 */
ModelsProperty.prototype['is_readonly'] = false;

/**
 * Whether the backend storage enforces unique values.
 * @member {Boolean} is_unique
 * @default false
 */
ModelsProperty.prototype['is_unique'] = false;

/**
 * The time when the property was last modified, in RFC3339 format.
 * @member {Date} modification_time
 */
ModelsProperty.prototype['modification_time'] = undefined;

/**
 * The name of the property. Must be unique.
 * @member {String} name
 */
ModelsProperty.prototype['name'] = undefined;

/**
 * The name of the data type of the property.
 * @member {String} pii_type_name
 */
ModelsProperty.prototype['pii_type_name'] = undefined;






export default ModelsProperty;

