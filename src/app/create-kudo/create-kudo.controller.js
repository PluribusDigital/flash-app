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

    vm.kudo = {};
    vm.kudoSubmitted = false;
    vm.kudoSubmitError = false;

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
      kudo.nominee = vm.nominee ? vm.nominee.id : null;

      flashService.resource('kudos').create(kudo)
        .then(function() {
          vm.kudoSubmitError = false;
          vm.kudoSubmitted = true;

          vm.kudo = {};
          vm.nominee = null;
        })
        .catch(function() {
          vm.kudoSubmitError = true;
          vm.kudoSubmitted = false;
        })
    };
  }

})();
