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

    function login(){
      vm.setCredentials();
      userService.users.loginUser().then(function(res){
        $log.info("response:" + angular.toJson(res));
      });
    }


    function setCredentials(){
      $rootScope.username = vm.username;
      $rootScope.password = vm.password;
    }

  }
})();
