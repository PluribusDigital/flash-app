(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('ApiDocsController', ApiDocsController);

  /** @ngInject */
  function ApiDocsController(config) {
    var vm = this;

    vm.swaggerUrl = config.baseUrl + "/swagger.json";

  }
})();
