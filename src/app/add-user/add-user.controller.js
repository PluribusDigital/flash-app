(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('AddUserController', AddUserController);

  /** @ngInject */
  function AddUserController($log, flashService, authService) {
    var vm = this;
    vm.new_user = null;
    vm.loggedInUser = null;
    authService.getIdentity().then(function(identity) {
      vm.loggedInUser = identity;
    });

    vm.userFields = [
      {
        key: 'first_name',
        type: 'input',
        templateOptions: {
          label: 'First Name'
        }
      },
      {
        key: 'last_name',
        type: 'input',
        templateOptions: {
          label: 'Last Name'
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email Address'
        }
      }
    ];

    vm.userAutocompleteDataset = [];
    flashService.resource('users').list().then(function(res) {
      vm.userAutocompleteDataset = res.data.data;
    });

    vm.submit = function() {
      var user = {};
      user.name = vm.new_user.first_name + ' ' + vm.new_user.last_name;
      user.email = vm.new_user.email;
      $log.info(user);
      vm.userSubmitted = true;
    };
  }

})();
