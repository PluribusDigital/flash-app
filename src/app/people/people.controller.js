(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('PeopleController', PeopleController);

  /** @ngInject */
  function PeopleController(flashService) {
    var vm = this;
    vm.getAllUsers = getAllUsers;

    vm.getAllUsers();

    function getAllUsers(){
      flashService.resource('users').list().then(function(res){
        vm.peopleList = res;
      });
    }
  }
})();
