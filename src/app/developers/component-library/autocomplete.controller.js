(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('ComponentLibraryAutocompleteController', AutocompleteController);

  /** @ngInject */
  function AutocompleteController() {
    var vm = this;

    var users = [
      {
        name: "Sally Fields",
        position: "HR Administrator",
        hireDate: "7/25/2012"
      },
      {
        name: "John Q. Public",
        position: "Secretary",
        hireDate: "1/1/2001"
      },
      {
        name: "George Lawson",
        position: "Paralegal",
        hireDate: "3/30/2007"
      }
    ];

    vm.user = null;
    vm.userAutocompleteDataset = users;
  }

})();
