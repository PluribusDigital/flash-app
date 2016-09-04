(function() {
  'use strict';

  angular
    .module('flashApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('people', {
        url: '/people',
        templateUrl: 'app/people/people.html',
        controller: 'PeopleController',
        controllerAs: 'vm'
      })
      .state('api-docs', {
        url: '/api-docs',
        templateUrl: 'app/api-docs/api-docs.html',
        controller: 'ApiDocsController',
        controllerAs: 'vm'
      })
      .state('component-library', {
        url: '/developers/component-library',
        templateUrl: 'app/developers/component-library/component-library.html'
      })
      .state('component-library.forms', {
        url: '/forms',
        templateUrl: 'app/developers/component-library/forms.html',
        controller: 'ComponentLibraryFormsController',
        controllerAs: 'vm'
      })
      .state('component-library.autocomplete', {
        url: '/autocomplete',
        templateUrl: 'app/developers/component-library/autocomplete.html',
        controller: 'ComponentLibraryAutocompleteController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
