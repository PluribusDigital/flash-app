(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $rootScope, $state, userService) {
    var vm = this;
    vm.setCredentials = setCredentials;
    vm.login = login;

    function login(username, password){
      vm.setCredentials(username, password);
      userService.users.loginUser().then(function(res){
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
