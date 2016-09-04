(function() {
  'use strict';

  describe('LoginController', function(){
    var vm;
    var $rootScope;
    var flashService;
    var $state;
    var $q;
    var $scope;
    var userResource = {
      get: function() {}
    };

    beforeEach(module('flashApp'));
    beforeEach(module('flashApp.core', function(AngularyticsProvider) {
      AngularyticsProvider.setEventHandlers(['Console']);
    }));
    beforeEach(inject(function($controller, _flashService_, _$rootScope_, _$state_, _$q_) {
      $q = _$q_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      flashService = _flashService_;
      $state = _$state_;
      spyOn(flashService, 'resource').and.returnValue(userResource);

      vm = $controller('LoginController', {
        flashService: flashService,
        '$state': $state
      });
    }));

    it('should go to the home page when login() is called', function() {
      var loggedInUser = {
          username: 'gwashington'
        },
        userGetDeferred = $q.defer();
      spyOn(userResource, 'get').and.returnValue(userGetDeferred.promise);
      spyOn($state, 'go');

      vm.login('gwashington', 'george1');
      userGetDeferred.resolve(loggedInUser);
      $scope.$apply();

      expect(userResource.get).toHaveBeenCalledWith('gwashington');

      expect($rootScope.username).toEqual('gwashington');
      expect($rootScope.password).toEqual('george1');
      expect($rootScope.loggedInUser).toEqual(loggedInUser);

      expect($state.go).toHaveBeenCalledWith('home');
    });
  });
})();
