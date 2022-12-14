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


import ApiClient from './ApiClient';
import AuthConfig from './model/AuthConfig';
import AuthPolicy from './model/AuthPolicy';
import AuthRole from './model/AuthRole';
import AuthUser from './model/AuthUser';
import ConfigConfig from './model/ConfigConfig';
import ConfigDB from './model/ConfigDB';
import ConfigFeatures from './model/ConfigFeatures';
import ConfigGC from './model/ConfigGC';
import ConfigKMS from './model/ConfigKMS';
import ConfigLog from './model/ConfigLog';
import ConfigMigration from './model/ConfigMigration';
import ConfigSentry from './model/ConfigSentry';
import ConfigService from './model/ConfigService';
import ConfigTLS from './model/ConfigTLS';
import ConfigTTL from './model/ConfigTTL';
import GcDeletionCount from './model/GcDeletionCount';
import ModelsAPIKey from './model/ModelsAPIKey';
import ModelsAllGenerations from './model/ModelsAllGenerations';
import ModelsCollection from './model/ModelsCollection';
import ModelsConfVar from './model/ModelsConfVar';
import ModelsConfVarValue from './model/ModelsConfVarValue';
import ModelsDetokenizedToken from './model/ModelsDetokenizedToken';
import ModelsHealth from './model/ModelsHealth';
import ModelsKMSStatus from './model/ModelsKMSStatus';
import ModelsLicense from './model/ModelsLicense';
import ModelsObject from './model/ModelsObject';
import ModelsObjectFieldsPage from './model/ModelsObjectFieldsPage';
import ModelsObjectID from './model/ModelsObjectID';
import ModelsPIIType from './model/ModelsPIIType';
import ModelsPaging from './model/ModelsPaging';
import ModelsProductVersion from './model/ModelsProductVersion';
import ModelsProperty from './model/ModelsProperty';
import ModelsQuery from './model/ModelsQuery';
import ModelsQueryToken from './model/ModelsQueryToken';
import ModelsTokenAggregatedMetadata from './model/ModelsTokenAggregatedMetadata';
import ModelsTokenMetadata from './model/ModelsTokenMetadata';
import ModelsTokenRefMetadata from './model/ModelsTokenRefMetadata';
import ModelsTokenValue from './model/ModelsTokenValue';
import ModelsTokenizeRequest from './model/ModelsTokenizeRequest';
import ModelsTransformation from './model/ModelsTransformation';
import ModelsUpdateTokenRequest from './model/ModelsUpdateTokenRequest';
import ModelsUserName from './model/ModelsUserName';
import ModelsVaultGeneration from './model/ModelsVaultGeneration';
import ModelsWorker from './model/ModelsWorker';
import RestHTTPError from './model/RestHTTPError';
import CollectionPropertiesApi from './api/CollectionPropertiesApi';
import CollectionsApi from './api/CollectionsApi';
import ConfigVarsApi from './api/ConfigVarsApi';
import DataTypesAndTransformationsApi from './api/DataTypesAndTransformationsApi';
import IAMApi from './api/IAMApi';
import ObjectsApi from './api/ObjectsApi';
import SystemApi from './api/SystemApi';
import TokensApi from './api/TokensApi';


/**
* --- sidebar_position: 1 sidebar_label: Overview slug: / ---  # Introduction  The Piiano Vault REST API enables you to access and manage collections, objects, tokens, users, policies, and other resources within Piiano Vault in a simple, programmatic way using conventional HTTP requests and standard HTTP response codes.  The API follows RESTful conventions when possible, with most operations performed by &#x60;GET&#x60;, &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;PATCH&#x60;, and &#x60;DELETE&#x60; requests. Request and response bodies are [JSON-encoded](https://www.json.org/json-en.html). However, for collection operations, an SQL-like [PVSchema](/guides/manage-collections-and-schemas/reference/pvschema) encoding is available.  This API reference provides details for each operation available in the API.  When you install a local copy of Vault, you can try each operation using **Send API request**.  An OpenAPI specification is available in [YAML](@site/static/assets/openapi.yaml) and [JSON](@site/static/assets/openapi.json) formats and can be used to generate client code for the API. .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PiianoVaultRestApi = require('index'); // See note below*.
* var xxxSvc = new PiianoVaultRestApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PiianoVaultRestApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PiianoVaultRestApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PiianoVaultRestApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AuthConfig model constructor.
     * @property {module:model/AuthConfig}
     */
    AuthConfig,

    /**
     * The AuthPolicy model constructor.
     * @property {module:model/AuthPolicy}
     */
    AuthPolicy,

    /**
     * The AuthRole model constructor.
     * @property {module:model/AuthRole}
     */
    AuthRole,

    /**
     * The AuthUser model constructor.
     * @property {module:model/AuthUser}
     */
    AuthUser,

    /**
     * The ConfigConfig model constructor.
     * @property {module:model/ConfigConfig}
     */
    ConfigConfig,

    /**
     * The ConfigDB model constructor.
     * @property {module:model/ConfigDB}
     */
    ConfigDB,

    /**
     * The ConfigFeatures model constructor.
     * @property {module:model/ConfigFeatures}
     */
    ConfigFeatures,

    /**
     * The ConfigGC model constructor.
     * @property {module:model/ConfigGC}
     */
    ConfigGC,

    /**
     * The ConfigKMS model constructor.
     * @property {module:model/ConfigKMS}
     */
    ConfigKMS,

    /**
     * The ConfigLog model constructor.
     * @property {module:model/ConfigLog}
     */
    ConfigLog,

    /**
     * The ConfigMigration model constructor.
     * @property {module:model/ConfigMigration}
     */
    ConfigMigration,

    /**
     * The ConfigSentry model constructor.
     * @property {module:model/ConfigSentry}
     */
    ConfigSentry,

    /**
     * The ConfigService model constructor.
     * @property {module:model/ConfigService}
     */
    ConfigService,

    /**
     * The ConfigTLS model constructor.
     * @property {module:model/ConfigTLS}
     */
    ConfigTLS,

    /**
     * The ConfigTTL model constructor.
     * @property {module:model/ConfigTTL}
     */
    ConfigTTL,

    /**
     * The GcDeletionCount model constructor.
     * @property {module:model/GcDeletionCount}
     */
    GcDeletionCount,

    /**
     * The ModelsAPIKey model constructor.
     * @property {module:model/ModelsAPIKey}
     */
    ModelsAPIKey,

    /**
     * The ModelsAllGenerations model constructor.
     * @property {module:model/ModelsAllGenerations}
     */
    ModelsAllGenerations,

    /**
     * The ModelsCollection model constructor.
     * @property {module:model/ModelsCollection}
     */
    ModelsCollection,

    /**
     * The ModelsConfVar model constructor.
     * @property {module:model/ModelsConfVar}
     */
    ModelsConfVar,

    /**
     * The ModelsConfVarValue model constructor.
     * @property {module:model/ModelsConfVarValue}
     */
    ModelsConfVarValue,

    /**
     * The ModelsDetokenizedToken model constructor.
     * @property {module:model/ModelsDetokenizedToken}
     */
    ModelsDetokenizedToken,

    /**
     * The ModelsHealth model constructor.
     * @property {module:model/ModelsHealth}
     */
    ModelsHealth,

    /**
     * The ModelsKMSStatus model constructor.
     * @property {module:model/ModelsKMSStatus}
     */
    ModelsKMSStatus,

    /**
     * The ModelsLicense model constructor.
     * @property {module:model/ModelsLicense}
     */
    ModelsLicense,

    /**
     * The ModelsObject model constructor.
     * @property {module:model/ModelsObject}
     */
    ModelsObject,

    /**
     * The ModelsObjectFieldsPage model constructor.
     * @property {module:model/ModelsObjectFieldsPage}
     */
    ModelsObjectFieldsPage,

    /**
     * The ModelsObjectID model constructor.
     * @property {module:model/ModelsObjectID}
     */
    ModelsObjectID,

    /**
     * The ModelsPIIType model constructor.
     * @property {module:model/ModelsPIIType}
     */
    ModelsPIIType,

    /**
     * The ModelsPaging model constructor.
     * @property {module:model/ModelsPaging}
     */
    ModelsPaging,

    /**
     * The ModelsProductVersion model constructor.
     * @property {module:model/ModelsProductVersion}
     */
    ModelsProductVersion,

    /**
     * The ModelsProperty model constructor.
     * @property {module:model/ModelsProperty}
     */
    ModelsProperty,

    /**
     * The ModelsQuery model constructor.
     * @property {module:model/ModelsQuery}
     */
    ModelsQuery,

    /**
     * The ModelsQueryToken model constructor.
     * @property {module:model/ModelsQueryToken}
     */
    ModelsQueryToken,

    /**
     * The ModelsTokenAggregatedMetadata model constructor.
     * @property {module:model/ModelsTokenAggregatedMetadata}
     */
    ModelsTokenAggregatedMetadata,

    /**
     * The ModelsTokenMetadata model constructor.
     * @property {module:model/ModelsTokenMetadata}
     */
    ModelsTokenMetadata,

    /**
     * The ModelsTokenRefMetadata model constructor.
     * @property {module:model/ModelsTokenRefMetadata}
     */
    ModelsTokenRefMetadata,

    /**
     * The ModelsTokenValue model constructor.
     * @property {module:model/ModelsTokenValue}
     */
    ModelsTokenValue,

    /**
     * The ModelsTokenizeRequest model constructor.
     * @property {module:model/ModelsTokenizeRequest}
     */
    ModelsTokenizeRequest,

    /**
     * The ModelsTransformation model constructor.
     * @property {module:model/ModelsTransformation}
     */
    ModelsTransformation,

    /**
     * The ModelsUpdateTokenRequest model constructor.
     * @property {module:model/ModelsUpdateTokenRequest}
     */
    ModelsUpdateTokenRequest,

    /**
     * The ModelsUserName model constructor.
     * @property {module:model/ModelsUserName}
     */
    ModelsUserName,

    /**
     * The ModelsVaultGeneration model constructor.
     * @property {module:model/ModelsVaultGeneration}
     */
    ModelsVaultGeneration,

    /**
     * The ModelsWorker model constructor.
     * @property {module:model/ModelsWorker}
     */
    ModelsWorker,

    /**
     * The RestHTTPError model constructor.
     * @property {module:model/RestHTTPError}
     */
    RestHTTPError,

    /**
    * The CollectionPropertiesApi service constructor.
    * @property {module:api/CollectionPropertiesApi}
    */
    CollectionPropertiesApi,

    /**
    * The CollectionsApi service constructor.
    * @property {module:api/CollectionsApi}
    */
    CollectionsApi,

    /**
    * The ConfigVarsApi service constructor.
    * @property {module:api/ConfigVarsApi}
    */
    ConfigVarsApi,

    /**
    * The DataTypesAndTransformationsApi service constructor.
    * @property {module:api/DataTypesAndTransformationsApi}
    */
    DataTypesAndTransformationsApi,

    /**
    * The IAMApi service constructor.
    * @property {module:api/IAMApi}
    */
    IAMApi,

    /**
    * The ObjectsApi service constructor.
    * @property {module:api/ObjectsApi}
    */
    ObjectsApi,

    /**
    * The SystemApi service constructor.
    * @property {module:api/SystemApi}
    */
    SystemApi,

    /**
    * The TokensApi service constructor.
    * @property {module:api/TokensApi}
    */
    TokensApi
};
