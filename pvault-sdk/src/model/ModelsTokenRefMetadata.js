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
 * The ModelsTokenRefMetadata model module.
 * @module model/ModelsTokenRefMetadata
 * @version 1.0
 */
class ModelsTokenRefMetadata {
    /**
     * Constructs a new <code>ModelsTokenRefMetadata</code>.
     * @alias module:model/ModelsTokenRefMetadata
     * @param creationTime {Date} Creation time of the token (UTC).
     * @param effectiveExpirationTime {Date} Effective expiry time of the token (UTC), being the earliest of the expiry time of the token or the object owning the token, if any.
     * @param expirationTime {Date} Expiry time of the token (UTC).
     * @param objectId {String} The object this token is for.
     * @param tags {Array.<String>} Tags attached to the token.
     */
    constructor(creationTime, effectiveExpirationTime, expirationTime, objectId, tags) { 
        
        ModelsTokenRefMetadata.initialize(this, creationTime, effectiveExpirationTime, expirationTime, objectId, tags);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, creationTime, effectiveExpirationTime, expirationTime, objectId, tags) { 
        obj['creation_time'] = creationTime;
        obj['effective_expiration_time'] = effectiveExpirationTime;
        obj['expiration_time'] = expirationTime;
        obj['object_id'] = objectId;
        obj['tags'] = tags;
    }

    /**
     * Constructs a <code>ModelsTokenRefMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsTokenRefMetadata} obj Optional instance to populate.
     * @return {module:model/ModelsTokenRefMetadata} The populated <code>ModelsTokenRefMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsTokenRefMetadata();

            if (data.hasOwnProperty('creation_time')) {
                obj['creation_time'] = ApiClient.convertToType(data['creation_time'], 'Date');
            }
            if (data.hasOwnProperty('effective_expiration_time')) {
                obj['effective_expiration_time'] = ApiClient.convertToType(data['effective_expiration_time'], 'Date');
            }
            if (data.hasOwnProperty('expiration_time')) {
                obj['expiration_time'] = ApiClient.convertToType(data['expiration_time'], 'Date');
            }
            if (data.hasOwnProperty('object_id')) {
                obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Creation time of the token (UTC).
 * @member {Date} creation_time
 */
ModelsTokenRefMetadata.prototype['creation_time'] = undefined;

/**
 * Effective expiry time of the token (UTC), being the earliest of the expiry time of the token or the object owning the token, if any.
 * @member {Date} effective_expiration_time
 */
ModelsTokenRefMetadata.prototype['effective_expiration_time'] = undefined;

/**
 * Expiry time of the token (UTC).
 * @member {Date} expiration_time
 */
ModelsTokenRefMetadata.prototype['expiration_time'] = undefined;

/**
 * The object this token is for.
 * @member {String} object_id
 */
ModelsTokenRefMetadata.prototype['object_id'] = undefined;

/**
 * Tags attached to the token.
 * @member {Array.<String>} tags
 */
ModelsTokenRefMetadata.prototype['tags'] = undefined;






export default ModelsTokenRefMetadata;
