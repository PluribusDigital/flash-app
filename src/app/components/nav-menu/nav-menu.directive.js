(function() {
  'use strict';
console.log("BLAH!");
  angular
    .module('flashApp')
    .directive('navMenu', function () {
      return {
        retrict: 'E',
        templateUrl: 'app/components/nav-menu/nav-menu.html'
      }
    });
})();
