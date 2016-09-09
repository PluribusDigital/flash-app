(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $rootScope, $state, authService) {
    var vm = this;
    vm.setCredentials = setCredentials;
    vm.login = login;
    vm.loginError = false;

    function login(username, password){
      authService.authenticate(username, password)
        .then(function() {
          $state.go('home');
        })
        .catch(function() {
          vm.loginError = true;
        });
      // vm.setCredentials(username, password);
      // flashService.resource('users').get(username).then(function(res){
      //   $rootScope.loggedInUser = res.data.data;
      //   $state.go('home');
      // });
    }


    function setCredentials(username, password){
      $rootScope.username = username;
      $rootScope.password = password;
    }

  }
})();
