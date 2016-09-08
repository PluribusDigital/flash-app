(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('ComponentLibraryFormsController', FormsController);

  /** @ngInject */
  function FormsController() {
    var vm = this;
    vm.user = {};
    vm.submittedUser = null;

    vm.submit = function (user) {
      vm.submittedUser = _.clone(user);
    };

    // note, these field types will need to be
    // pre-defined. See the pre-built and custom templates
    // http://docs.angular-formly.com/v6.4.0/docs/custom-templates
    vm.userFields = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email'
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        }
      },
      {
        key: 'date',
        type: 'datepicker',
        templateOptions: {
          label: 'Date'
        }
      },
      {
        key: 'file',
        type: 'file',
        templateOptions: {
          label: 'File input',
          description: 'Example block-level help text here',
          url: 'https://example.com/upload'
        }
      },
      {
        key: 'checked',
        type: 'checkbox',
        templateOptions: {
          label: 'Check me out'
        }
      }
    ];
  }

})();
