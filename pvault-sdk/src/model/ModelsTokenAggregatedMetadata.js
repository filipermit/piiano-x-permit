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
 * The ModelsTokenAggregatedMetadata model module.
 * @module model/ModelsTokenAggregatedMetadata
 * @version 1.0
 */
class ModelsTokenAggregatedMetadata {
    /**
     * Constructs a new <code>ModelsTokenAggregatedMetadata</code>.
     * @alias module:model/ModelsTokenAggregatedMetadata
     */
    constructor() { 
        
        ModelsTokenAggregatedMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsTokenAggregatedMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsTokenAggregatedMetadata} obj Optional instance to populate.
     * @return {module:model/ModelsTokenAggregatedMetadata} The populated <code>ModelsTokenAggregatedMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsTokenAggregatedMetadata();

            if (data.hasOwnProperty('max_effective_expiration_time')) {
                obj['max_effective_expiration_time'] = ApiClient.convertToType(data['max_effective_expiration_time'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Latest expiry of all tokens with the token ID (UTC).
 * @member {Date} max_effective_expiration_time
 */
ModelsTokenAggregatedMetadata.prototype['max_effective_expiration_time'] = undefined;






export default ModelsTokenAggregatedMetadata;
