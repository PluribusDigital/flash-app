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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
