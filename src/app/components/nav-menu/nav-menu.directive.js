(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('NavMenuController', NavMenuController)
    .directive('navMenu', function () {
      return {
        retrict: 'E',
        scope: {
          menuVisible: '='
        },
        bindToController: true,
        controller: 'NavMenuController',
        controllerAs: 'vm',
        templateUrl: 'app/components/nav-menu/nav-menu.html'
      }
    });

  /* @ngInject */
  function NavMenuController($state) {
    var vm = this;

    vm.hideMenu = function() {
      vm.menuVisible = false;
    };

    vm.isInSection = function(section) {
      return $state.current.name.indexOf(section) == 0;
    };
  }
})();
