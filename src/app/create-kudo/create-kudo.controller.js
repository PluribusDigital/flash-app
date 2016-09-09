(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('CreateKudoController', CreateKudoController);

  /** @ngInject */
  function CreateKudoController($log, flashService, authService) {
    var vm = this;

    vm.loggedInUser = null;
    authService.getIdentity().then(function(identity) {
      vm.loggedInUser = identity;
    });

    vm.nominee = null;

    vm.kudo = null;
    vm.kudoSubmitted = false;

    vm.kudoFields = [
      {
        key: 'category',
        type: 'select',
        templateOptions: {
          label: 'Category',
          options: [
            {
              value: 'Teamwork',
              name: 'Teamwork'
            },
            {
              value: 'Improvement',
              name: 'Improvement'
            },
            {
              value: 'Delivery',
              name: 'Delivery'
            },
            {
              value: 'Experiment',
              name: 'Experiment'
            }
          ]
        }
      },
      {
        key: 'comment',
        type: 'textarea',
        templateOptions: {
          label: 'Comment',
          placeholder: 'Write your comment here'
        }
      }
    ];

    vm.userAutocompleteDataset = [];
    flashService.resource('users').list().then(function(res) {
      vm.userAutocompleteDataset = res.data.data;
    });

    vm.submit = function() {
      var kudo = _.clone(vm.kudo);
      kudo.nominator = vm.loggedInUser.id;
      kudo.nominee = vm.nominee.id;
      $log.info(kudo);
    };
  }

})();
