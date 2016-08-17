(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.showNavMenu = false;

    vm.toggleNavMenu = function() {
      vm.showNavMenu = !vm.showNavMenu;
      console.log("Show nav? ", vm.showNavMenu);
    }

  }
})();
