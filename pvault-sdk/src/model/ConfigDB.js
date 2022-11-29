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
import ConfigGC from './ConfigGC';
import ConfigMigration from './ConfigMigration';

/**
 * The ConfigDB model module.
 * @module model/ConfigDB
 * @version 1.0
 */
class ConfigDB {
    /**
     * Constructs a new <code>ConfigDB</code>.
     * @alias module:model/ConfigDB
     * @param connMaxLifetimeMinutes {Number} 
     * @param gc {module:model/ConfigGC} 
     * @param hostname {String} 
     * @param maxIdleConns {Number} 
     * @param maxOpenConns {Number} 
     * @param migration {module:model/ConfigMigration} 
     * @param name {String} 
     * @param password {String} 
     * @param port {Number} 
     * @param requireTls {Boolean} 
     * @param user {String} 
     */
    constructor(connMaxLifetimeMinutes, gc, hostname, maxIdleConns, maxOpenConns, migration, name, password, port, requireTls, user) { 
        
        ConfigDB.initialize(this, connMaxLifetimeMinutes, gc, hostname, maxIdleConns, maxOpenConns, migration, name, password, port, requireTls, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, connMaxLifetimeMinutes, gc, hostname, maxIdleConns, maxOpenConns, migration, name, password, port, requireTls, user) { 
        obj['conn_max_lifetime_minutes'] = connMaxLifetimeMinutes;
        obj['gc'] = gc;
        obj['hostname'] = hostname;
        obj['max_idle_conns'] = maxIdleConns;
        obj['max_open_conns'] = maxOpenConns;
        obj['migration'] = migration;
        obj['name'] = name;
        obj['password'] = password;
        obj['port'] = port;
        obj['require_tls'] = requireTls;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>ConfigDB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigDB} obj Optional instance to populate.
     * @return {module:model/ConfigDB} The populated <code>ConfigDB</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigDB();

            if (data.hasOwnProperty('conn_max_lifetime_minutes')) {
                obj['conn_max_lifetime_minutes'] = ApiClient.convertToType(data['conn_max_lifetime_minutes'], 'Number');
            }
            if (data.hasOwnProperty('gc')) {
                obj['gc'] = ConfigGC.constructFromObject(data['gc']);
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('max_idle_conns')) {
                obj['max_idle_conns'] = ApiClient.convertToType(data['max_idle_conns'], 'Number');
            }
            if (data.hasOwnProperty('max_open_conns')) {
                obj['max_open_conns'] = ApiClient.convertToType(data['max_open_conns'], 'Number');
            }
            if (data.hasOwnProperty('max_string_length')) {
                obj['max_string_length'] = ApiClient.convertToType(data['max_string_length'], 'Number');
            }
            if (data.hasOwnProperty('migration')) {
                obj['migration'] = ConfigMigration.constructFromObject(data['migration']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('require_tls')) {
                obj['require_tls'] = ApiClient.convertToType(data['require_tls'], 'Boolean');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} conn_max_lifetime_minutes
 */
ConfigDB.prototype['conn_max_lifetime_minutes'] = undefined;

/**
 * @member {module:model/ConfigGC} gc
 */
ConfigDB.prototype['gc'] = undefined;

/**
 * @member {String} hostname
 */
ConfigDB.prototype['hostname'] = undefined;

/**
 * @member {Number} max_idle_conns
 */
ConfigDB.prototype['max_idle_conns'] = undefined;

/**
 * @member {Number} max_open_conns
 */
ConfigDB.prototype['max_open_conns'] = undefined;

/**
 * @member {Number} max_string_length
 */
ConfigDB.prototype['max_string_length'] = undefined;

/**
 * @member {module:model/ConfigMigration} migration
 */
ConfigDB.prototype['migration'] = undefined;

/**
 * @member {String} name
 */
ConfigDB.prototype['name'] = undefined;

/**
 * @member {String} password
 */
ConfigDB.prototype['password'] = undefined;

/**
 * @member {Number} port
 */
ConfigDB.prototype['port'] = undefined;

/**
 * @member {Boolean} require_tls
 */
ConfigDB.prototype['require_tls'] = undefined;

/**
 * @member {String} user
 */
ConfigDB.prototype['user'] = undefined;






export default ConfigDB;
