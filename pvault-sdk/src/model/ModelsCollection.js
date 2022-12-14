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
import ModelsProperty from './ModelsProperty';

/**
 * The ModelsCollection model module.
 * @module model/ModelsCollection
 * @version 1.0
 */
class ModelsCollection {
    /**
     * Constructs a new <code>ModelsCollection</code>.
     * @alias module:model/ModelsCollection
     * @param name {String} The name of the collection.
     * @param properties {Array.<module:model/ModelsProperty>} 
     * @param type {module:model/ModelsCollection.TypeEnum} The schema prototype the collection is based on.
     */
    constructor(name, properties, type) { 
        
        ModelsCollection.initialize(this, name, properties, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, properties, type) { 
        obj['name'] = name;
        obj['properties'] = properties;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ModelsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsCollection} obj Optional instance to populate.
     * @return {module:model/ModelsCollection} The populated <code>ModelsCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsCollection();

            if (data.hasOwnProperty('creation_time')) {
                obj['creation_time'] = ApiClient.convertToType(data['creation_time'], 'Date');
            }
            if (data.hasOwnProperty('modification_time')) {
                obj['modification_time'] = ApiClient.convertToType(data['modification_time'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [ModelsProperty]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The time when the collection was created, in RFC3339 format.
 * @member {Date} creation_time
 */
ModelsCollection.prototype['creation_time'] = undefined;

/**
 * The time when the collection was last modified, in RFC3339 format.
 * @member {Date} modification_time
 */
ModelsCollection.prototype['modification_time'] = undefined;

/**
 * The name of the collection.
 * @member {String} name
 */
ModelsCollection.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ModelsProperty>} properties
 */
ModelsCollection.prototype['properties'] = undefined;

/**
 * The schema prototype the collection is based on.
 * @member {module:model/ModelsCollection.TypeEnum} type
 */
ModelsCollection.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ModelsCollection['TypeEnum'] = {

    /**
     * value: "PERSONS"
     * @const
     */
    "PERSONS": "PERSONS",

    /**
     * value: "DATA"
     * @const
     */
    "DATA": "DATA"
};



export default ModelsCollection;

