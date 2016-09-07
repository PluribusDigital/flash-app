(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($state, $scope) {
    var vm = this;

    vm.state = $state;

    vm.showNavMenu = false;

    vm.toggleNavMenu = function() {
      vm.showNavMenu = !vm.showNavMenu;
    };

  }
})();
