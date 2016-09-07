(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('CreateAppreciationController', CreateAppreciationController);

  /** @ngInject */
  function CreateAppreciationController($log, $rootScope, $state, flashService) {
    var vm = this;

    vm.users = [];

    flashService.resource('users').list().then(function(res) {
      vm.users = res.data.data;
    });

    vm.toUser = null;
    vm.appreciation = {};

    vm.appreciationFields = [
      {
        key: 'date_given',
        type: 'input',
        templateOptions: {
          label: 'Date',
          placeholder: 'YYYY-MM-DD'
        }
      },
      {
        key: 'title',
        type: 'input',
        templateOptions: {
          label: 'Title',
          placeholder: 'Enter a short description of your appreciation'
        }
      },
      {
        key: 'description_of_conduct',
        type: 'textarea',
        templateOptions: {
          label: 'Description of Conduct',
          placeholder: ''
        }
      },
      {
        key: 'positive_effect_on_others',
        type: 'textarea',
        templateOptions: {
          label: 'Positive Effect on Others',
          placeholder: ''
        }
      }
    ];

    vm.submit = function() {
      var appreciation = _.clone(vm.appreciation);
      appreciation.to_user = vm.toUser.id;
      appreciation.from_user = $rootScope.loggedInUser.id;

      flashService.resource('appreciations').create(appreciation).then(function(res){
        $state.go('home');
      }, function(err) {
        vm.unsuccessful = err;
      });      
    };

  }
})();
