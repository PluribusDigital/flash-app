(function() {
  'use strict';

  angular
    .module('flashApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($provide, $stateProvider, $urlRouterProvider) {
    $provide.decorator('$state', function($delegate, $rootScope) {
      $rootScope.$on('$stateChangeStart', function(event, state, params) {
        $delegate.next = state;
        $delegate.toParams = params;
      });
      return $delegate;
    });

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('not-authorized', {
        // url: '/not-authorized',
        template: 'Not authorized'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        resolve: { authenticate: authenticate }
      })
      .state('people', {
        url: '/people',
        templateUrl: 'app/people/people.html',
        controller: 'PeopleController',
        controllerAs: 'vm',
        resolve: { authenticate: authenticate }
      })
      .state('user-settings', {
        url: '/user-settings',
        templateUrl: 'app/user-settings/user-settings.html',
        controller: 'UserSettingsController',
        controllerAs: 'vm',
        resolve: { authenticate: authenticate }
      })
      .state('create-kudo', {
        url: '/create-kudo',
        templateUrl: 'app/create-kudo/create-kudo.html',
        controller: 'CreateKudoController',
        controllerAs: 'vm',
        resolve: { authenticate: authenticate }
      })
      .state('add-user', {
        url: '/add-user',
        templateUrl: 'app/add-user/add-user.html',
        controller: 'AddUserController',
        controllerAs: 'vm',
        resolve: { authenticate: authenticate }
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'vm',
        data: {
          roles: ['Admin']
        },
        resolve: { authenticate: authenticate }
      })
      //Developer/Docs routes
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
      })
      .state('component-library.uigrid', {
        url: '/uigrid',
        templateUrl: 'app/developers/component-library/uigrid.html',
        controller: 'ComponentLibraryUIGridController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');

    function authenticate($rootScope, $q, authService, $state, $timeout) {
      var authDefer = $q.defer();

      authService.getIdentity()
        .then(function(identity) {

          if ($state.next.data && $state.next.data.roles.indexOf(identity.role) === -1) {
            $timeout(function() {
              $state.go('not-authorized')
            });

            authDefer.reject({
              message: 'Not authorized'
            });
          } else {
            authDefer.resolve(identity);
          }
        })
        .catch(function(err) {
          $timeout(function() {
            $state.go('login')
          });
          authDefer.reject(err);
        });

      return authDefer.promise;
    }
  }

})();
