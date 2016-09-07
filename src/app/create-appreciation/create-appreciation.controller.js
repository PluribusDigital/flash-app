(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('CreateAppreciationController', CreateAppreciationController);

  /** @ngInject */
  function CreateAppreciationController($log, $rootScope, $state, flashService) {
    var vm = this;

    vm.appreciation = {};

    vm.appreciationFields = [
      {
        key: 'to_user',
        type: 'input',
        templateOptions: {
          label: 'Give Appreciation To',
          placeholder: 'Enter your peer\'s username'
        }
      },
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
          label: 'Description of Conduct',
          placeholder: ''
        }
      }
    ];

    vm.submit = function() {
      var appreciation = _.clone(vm.appreciation);

      $log.info(appreciation);
    };

  }
})();
