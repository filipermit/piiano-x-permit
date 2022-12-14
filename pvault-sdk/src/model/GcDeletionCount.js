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
 * The GcDeletionCount model module.
 * @module model/GcDeletionCount
 * @version 1.0
 */
class GcDeletionCount {
    /**
     * Constructs a new <code>GcDeletionCount</code>.
     * @alias module:model/GcDeletionCount
     * @param collectionName {String} The name of the collection containing the objects or tokens to delete.
     * @param collectionType {module:model/GcDeletionCount.CollectionTypeEnum} The type of the collection.
     * @param count {Number} The number of items permanently deleted.
     */
    constructor(collectionName, collectionType, count) { 
        
        GcDeletionCount.initialize(this, collectionName, collectionType, count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, collectionName, collectionType, count) { 
        obj['collection_name'] = collectionName;
        obj['collection_type'] = collectionType;
        obj['count'] = count;
    }

    /**
     * Constructs a <code>GcDeletionCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcDeletionCount} obj Optional instance to populate.
     * @return {module:model/GcDeletionCount} The populated <code>GcDeletionCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcDeletionCount();

            if (data.hasOwnProperty('collection_name')) {
                obj['collection_name'] = ApiClient.convertToType(data['collection_name'], 'String');
            }
            if (data.hasOwnProperty('collection_type')) {
                obj['collection_type'] = ApiClient.convertToType(data['collection_type'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name of the collection containing the objects or tokens to delete.
 * @member {String} collection_name
 */
GcDeletionCount.prototype['collection_name'] = undefined;

/**
 * The type of the collection.
 * @member {module:model/GcDeletionCount.CollectionTypeEnum} collection_type
 */
GcDeletionCount.prototype['collection_type'] = undefined;

/**
 * The number of items permanently deleted.
 * @member {Number} count
 */
GcDeletionCount.prototype['count'] = undefined;





/**
 * Allowed values for the <code>collection_type</code> property.
 * @enum {String}
 * @readonly
 */
GcDeletionCount['CollectionTypeEnum'] = {

    /**
     * value: "DATA"
     * @const
     */
    "DATA": "DATA",

    /**
     * value: "PERSONS"
     * @const
     */
    "PERSONS": "PERSONS",

    /**
     * value: "TOKENS"
     * @const
     */
    "TOKENS": "TOKENS"
};



export default GcDeletionCount;

