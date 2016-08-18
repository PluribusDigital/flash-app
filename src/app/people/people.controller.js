(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('PeopleController', PeopleController);

  /** @ngInject */
  function PeopleController(userService) {
    var vm = this;
    vm.getAllUsers = getAllUsers;

    vm.getAllUsers();

    function getAllUsers(){
      vm.peopleList = userService.getAllUsers();
    }
  }
})();
