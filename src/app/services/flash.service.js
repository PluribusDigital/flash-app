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

      var users = {

        getUser: function (username) {

          return $http(requestParams({
              method: 'GET',
              cache: true,
              url: client.routes.users + '/' + username,
              params: {
                api_key: client.apiKey
              }
          }));

        },

        getAllUsers: function () {

          return $http(requestParams({
              method: 'GET',
              cache: true,
              url: client.routes.users,
              params: {
                api_key: client.apiKey
              }
          }));

        }
      };

      return {
        client: client,
        users: users
      };

    }

})();
