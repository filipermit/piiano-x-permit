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
 * The ModelsProductVersion model module.
 * @module model/ModelsProductVersion
 * @version 1.0
 */
class ModelsProductVersion {
    /**
     * Constructs a new <code>ModelsProductVersion</code>.
     * @alias module:model/ModelsProductVersion
     * @param dbSchemaVersion {Number} 
     * @param vaultId {String} 
     * @param vaultVersion {String} The version of a Vault specified as a string consisting of version number, build number, and edition.
     */
    constructor(dbSchemaVersion, vaultId, vaultVersion) { 
        
        ModelsProductVersion.initialize(this, dbSchemaVersion, vaultId, vaultVersion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dbSchemaVersion, vaultId, vaultVersion) { 
        obj['db_schema_version'] = dbSchemaVersion;
        obj['vault_id'] = vaultId;
        obj['vault_version'] = vaultVersion;
    }

    /**
     * Constructs a <code>ModelsProductVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsProductVersion} obj Optional instance to populate.
     * @return {module:model/ModelsProductVersion} The populated <code>ModelsProductVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsProductVersion();

            if (data.hasOwnProperty('db_schema_version')) {
                obj['db_schema_version'] = ApiClient.convertToType(data['db_schema_version'], 'Number');
            }
            if (data.hasOwnProperty('vault_id')) {
                obj['vault_id'] = ApiClient.convertToType(data['vault_id'], 'String');
            }
            if (data.hasOwnProperty('vault_version')) {
                obj['vault_version'] = ApiClient.convertToType(data['vault_version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} db_schema_version
 */
ModelsProductVersion.prototype['db_schema_version'] = undefined;

/**
 * @member {String} vault_id
 */
ModelsProductVersion.prototype['vault_id'] = undefined;

/**
 * The version of a Vault specified as a string consisting of version number, build number, and edition.
 * @member {String} vault_version
 */
ModelsProductVersion.prototype['vault_version'] = undefined;






export default ModelsProductVersion;

