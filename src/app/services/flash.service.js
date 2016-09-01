(function() {
  'use strict';

  angular
    .module('flashApp')
    .factory('flashService', flashService);

    function flashService($log, $http, $q, $rootScope, config, $base64) {

      var client = {
        baseUrl: config.baseUrl,
        apiUrl: config.baseUrl + 'v1/',
        apiKey: config.apiKey,
        client_id: config.clientID,
        client_secret: config.clientSecret,
        random_code: $rootScope.random_code
      };

      client.routes = {
        authenticate: client.baseUrl + 'oauth/',
        users: client.apiUrl + 'users'
      };

      var requestParams = function(params) {
        var flashParams = params;
        var userpassEncode = $base64.encode($rootScope.username + ':' + $rootScope.password);

        if (!flashParams.headers) {flashParams.headers = {};}
        flashParams.headers['Content-Type'] = 'application/json';
        flashParams.headers['Authorization'] = 'Basic ' + userpassEncode;
        return flashParams;
      };

      var doHttpRequest = function(version, method, path, params, cache) {
        return $http(requestParams({
            method: method,
            cache: cache,
            url: config.baseUrl + 'v' + version + '/' + path,
            params: _.extend(params, {
              api_key: client.apiKey
            })
        }));
      };

      var Resource = function(resourceType) {
        var version = '1';

        this.version = function(newVersion) {
          version = newVersion;
        };

        this.list = function() {
          return doHttpRequest(version, 'GET', resourceType, {}, true);
        };

        this.get = function(id) {
        };

        this.create = function(data) {
        };

        this.update = function(id, data) {
        };

        this.delete = function(id) {
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
