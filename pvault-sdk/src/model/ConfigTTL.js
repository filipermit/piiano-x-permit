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
 * The ConfigTTL model module.
 * @module model/ConfigTTL
 * @version 1.0
 */
class ConfigTTL {
    /**
     * Constructs a new <code>ConfigTTL</code>.
     * @alias module:model/ConfigTTL
     * @param associatedObjects {Number} 
     * @param tokens {Number} 
     * @param unassociatedObjects {Number} 
     */
    constructor(associatedObjects, tokens, unassociatedObjects) { 
        
        ConfigTTL.initialize(this, associatedObjects, tokens, unassociatedObjects);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, associatedObjects, tokens, unassociatedObjects) { 
        obj['associated_objects'] = associatedObjects;
        obj['tokens'] = tokens;
        obj['unassociated_objects'] = unassociatedObjects;
    }

    /**
     * Constructs a <code>ConfigTTL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigTTL} obj Optional instance to populate.
     * @return {module:model/ConfigTTL} The populated <code>ConfigTTL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigTTL();

            if (data.hasOwnProperty('associated_objects')) {
                obj['associated_objects'] = ApiClient.convertToType(data['associated_objects'], 'Number');
            }
            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], 'Number');
            }
            if (data.hasOwnProperty('unassociated_objects')) {
                obj['unassociated_objects'] = ApiClient.convertToType(data['unassociated_objects'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} associated_objects
 */
ConfigTTL.prototype['associated_objects'] = undefined;

/**
 * @member {Number} tokens
 */
ConfigTTL.prototype['tokens'] = undefined;

/**
 * @member {Number} unassociated_objects
 */
ConfigTTL.prototype['unassociated_objects'] = undefined;






export default ConfigTTL;

