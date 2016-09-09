(function() {
  'use strict';

  describe('LoginController', function(){
    var vm;
    var $rootScope;
    var authService;
    var $state;
    var $q;
    var $scope;

    beforeEach(module('flashApp'));
    beforeEach(module('flashApp.core', function(AngularyticsProvider) {
      AngularyticsProvider.setEventHandlers(['Console']);
    }));
    beforeEach(inject(function($controller, _authService_, _$rootScope_, _$state_, _$q_) {
      $q = _$q_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      authService = _authService_;
      $state = _$state_;

      vm = $controller('LoginController', {
        authService: authService,
        '$state': $state
      });
    }));

    it('should go to the home page when login() is called', function() {
      var loggedInUser = {
          username: 'gwashington'
        },
        authDefer = $q.defer();
      spyOn(authService, 'authenticate').and.returnValue(authDefer.promise);
      spyOn($state, 'go');

      vm.login('gwashington', 'george1');
      authDefer.resolve(loggedInUser);
      $scope.$apply();

      expect(authService.authenticate).toHaveBeenCalledWith('gwashington', 'george1');

      expect($state.go).toHaveBeenCalledWith('home');
      expect(vm.loginError).toEqual(false);
    });

    it('should toggle error flag if authentication was unsuccessful', function() {
      var authDefer = $q.defer();
      spyOn(authService, 'authenticate').and.returnValue(authDefer.promise);
      spyOn($state, 'go');

      vm.login('gwashington', 'george1');
      authDefer.reject({});
      $scope.$apply();

      expect(authService.authenticate).toHaveBeenCalledWith('gwashington', 'george1');

      expect($state.go).not.toHaveBeenCalled();
      expect(vm.loginError).toEqual(true);
    });
  });
})();
