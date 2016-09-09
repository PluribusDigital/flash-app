(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('AddUserController', AddUserController);

  /** @ngInject */
  function AddUserController($log, flashService) {
    var vm = this;
    vm.new_user = null;

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


    vm.submit = function() {
      var user = {};
      user.name = vm.new_user.first_name + ' ' + vm.new_user.last_name;
      user.email = vm.new_user.email;
      $log.info(user);
      vm.userSubmitted = true;
    };
  }

})();
