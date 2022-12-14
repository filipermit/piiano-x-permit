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
 * The ModelsVaultGeneration model module.
 * @module model/ModelsVaultGeneration
 * @version 1.0
 */
class ModelsVaultGeneration {
    /**
     * Constructs a new <code>ModelsVaultGeneration</code>.
     * Vault Generation.
     * @alias module:model/ModelsVaultGeneration
     * @param generationNumber {Number} Generation number.
     * @param modifiedAt {Date} Modified at.
     */
    constructor(generationNumber, modifiedAt) { 
        
        ModelsVaultGeneration.initialize(this, generationNumber, modifiedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, generationNumber, modifiedAt) { 
        obj['generation_number'] = generationNumber;
        obj['modified_at'] = modifiedAt;
    }

    /**
     * Constructs a <code>ModelsVaultGeneration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsVaultGeneration} obj Optional instance to populate.
     * @return {module:model/ModelsVaultGeneration} The populated <code>ModelsVaultGeneration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsVaultGeneration();

            if (data.hasOwnProperty('generation_number')) {
                obj['generation_number'] = ApiClient.convertToType(data['generation_number'], 'Number');
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Generation number.
 * @member {Number} generation_number
 */
ModelsVaultGeneration.prototype['generation_number'] = undefined;

/**
 * Modified at.
 * @member {Date} modified_at
 */
ModelsVaultGeneration.prototype['modified_at'] = undefined;






export default ModelsVaultGeneration;

