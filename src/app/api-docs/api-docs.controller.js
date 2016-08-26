(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('ApiDocsController', ApiDocsController)
    .service('apiDocsSwaggerModule', function($q, $rootScope, $base64, config) {

        this.execute = function(options) {
            var deferred = $q.defer();

            //Add authorization header
            var credentials = $base64.encode($rootScope.username + ':' + $rootScope.password);
            if (typeof options.headers === 'undefined') {
              options.headers = {};
            }
            options.headers['Authorization'] = 'Basic ' + credentials;

            //Add API Key if it's not there
            if (options.url.indexOf('api_key') === -1) {
              options.url += (options.url.indexOf('?') === -1 ? '?' : '&') + 'api_key=' + config.apiKey;
            }

            deferred.resolve(true);
            return deferred.promise;
        }

    })
    .run(function(swaggerModules, apiDocsSwaggerModule){
        swaggerModules.add(swaggerModules.BEFORE_LOAD, apiDocsSwaggerModule);
        swaggerModules.add(swaggerModules.BEFORE_EXPLORER_LOAD, apiDocsSwaggerModule);
    });

  /** @ngInject */
  function ApiDocsController(config) {
    var vm = this;

    vm.swaggerUrl = config.baseUrl + "v1/?api_key=" + config.apiKey;

  }
})();
