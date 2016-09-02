(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $rootScope, $state, flashService) {
    var vm = this;
    vm.setCredentials = setCredentials;
    vm.login = login;

    function login(username, password){
      vm.setCredentials(username, password);
      flashService.resource('users').get(username).then(function(res){
        $log.info(angular.toJson(res));
        $rootScope.loggedInUser = res;
        $state.go('home');
      });
    }


    function setCredentials(username, password){
      $rootScope.username = username;
      $rootScope.password = password;
    }

  }
})();
