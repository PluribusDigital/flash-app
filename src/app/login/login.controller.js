(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($state) {
    var vm = this;

    vm.gotoApp = function() {
      $state.go('home');
    }

  }
})();
