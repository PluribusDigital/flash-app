/* global _ */
(function() {
  'use strict';

  angular
    .module('flashApp')
    .factory('flashService', flashService);

    function flashService($log, $http, $q, $rootScope, config, $base64) {

      var requestParams = function(params) {
        var flashParams = params;
        var userpassEncode = $base64.encode($rootScope.username + ':' + $rootScope.password);

        if (!flashParams.headers) {flashParams.headers = {};}
        flashParams.headers['Content-Type'] = 'application/json';
        flashParams.headers['Authorization'] = 'Basic ' + userpassEncode;
        return flashParams;
      };

      var doHttpRequest = function(version, method, path, params, data, cache) {
        return $http(requestParams({
            method: method,
            cache: cache,
            url: config.baseUrl + 'v' + version + '/' + path,
            params: _.extend(params, {
              api_key: config.apiKey
            }),
            data: data
        }));
      };

      var Resource = function(resourceType) {
        var version = '1';

        this.version = function(newVersion) {
          version = newVersion;
        };

        this.list = function() {
          return doHttpRequest(version, 'GET', resourceType, {}, undefined, true);
        };

        this.get = function(id) {
          return doHttpRequest(version, 'GET', resourceType + '/' + id, {}, undefined, true);
        };

        this.create = function(data) {
          return doHttpRequest(version, 'POST', resourceType, {}, data, true);
        };

        this.update = function(id, data) {
          return doHttpRequest(version, 'POST', resourceType + '/' + id, {}, data, true);
        };

        this.delete = function(id) {
          return doHttpRequest(version, 'DELETE', resourceType + '/' + id, {}, undefined, true);
        };

      };

      var getResourceHandler = function(resourceType) {
        return new Resource(resourceType)
      };

      return {
        resource: getResourceHandler
      };

    }

})();
