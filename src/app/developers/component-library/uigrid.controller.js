(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('ComponentLibraryUIGridController', ComponentLibraryUIGridController);

  /** @ngInject */
  function ComponentLibraryUIGridController($log, $rootScope, $state, uiGridConstants) {
    var vm = this;

    vm.selectedEmployee = null;

    vm.employeeGrid = {
      data: [
        {
          id: 1,
          name: 'Jon Minter',
          num_appreciations: 5
        },
        {
          id: 2,
          name: 'Trey White',
          num_appreciations: 3
        }
      ],
      appScopeProvider: vm,
      enableSorting: true,
      onRegisterApi: function( gridApi ) {
        vm.grid2Api = gridApi;
      },
      columnDefs: [
        {
          field: 'name',
          name: 'Employee Name',
          sort: {
            direction: uiGridConstants.DESC,
            priority: 0
          }
        },
        {
          field: 'num_appreciations',
          name: 'Number of Appreciations',
          sort: {
            direction: uiGridConstants.DESC,
            priority: 1
          }
        },
        {
          name: 'Action',
          enableSorting: false,
          cellTemplate: '<a href ng-click="grid.appScope.viewEmployeeAppreciations(row.entity)">Details</a>'
        }
      ]
    };

    vm.viewEmployeeAppreciations = function(entity) {
      $log.info(entity);
      vm.selectedEmployee = entity;
    };

  }
})();
