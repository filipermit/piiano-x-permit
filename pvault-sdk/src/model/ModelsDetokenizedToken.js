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
import ModelsTokenMetadata from './ModelsTokenMetadata';

/**
 * The ModelsDetokenizedToken model module.
 * @module model/ModelsDetokenizedToken
 * @version 1.0
 */
class ModelsDetokenizedToken {
    /**
     * Constructs a new <code>ModelsDetokenizedToken</code>.
     * @alias module:model/ModelsDetokenizedToken
     * @param fields {Object.<String, Object>} 
     * @param tokenId {String} The token ID.
     */
    constructor(fields, tokenId) { 
        
        ModelsDetokenizedToken.initialize(this, fields, tokenId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fields, tokenId) { 
        obj['fields'] = fields;
        obj['token_id'] = tokenId;
    }

    /**
     * Constructs a <code>ModelsDetokenizedToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsDetokenizedToken} obj Optional instance to populate.
     * @return {module:model/ModelsDetokenizedToken} The populated <code>ModelsDetokenizedToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsDetokenizedToken();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': Object});
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ModelsTokenMetadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Object>} fields
 */
ModelsDetokenizedToken.prototype['fields'] = undefined;

/**
 * The token ID.
 * @member {String} token_id
 */
ModelsDetokenizedToken.prototype['token_id'] = undefined;

/**
 * @member {module:model/ModelsTokenMetadata} metadata
 */
ModelsDetokenizedToken.prototype['metadata'] = undefined;






export default ModelsDetokenizedToken;
