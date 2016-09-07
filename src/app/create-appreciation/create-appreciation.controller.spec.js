(function() {
  'use strict';

  describe('CreateAppreciationController', function(){
    var vm;
    var $rootScope;
    var flashService;
    var $state;
    var $q;
    var $scope;
    var appreciationResource = {
      get: function() {}
    };
    var userResource = {
      list: function() {}
    };
    var users = [
      {username: 'gwashington'}
    ];

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
      spyOn(flashService, 'resource').and.callFake(function(resourceName) {
        var returnValueMap = {
          'users': userResource,
          'appreciations': appreciationResource
        };

        return returnValueMap[resourceName];
      });
      // spyOn(flashService, 'resource').and.returnValue(appreciationResource);
      spyOn(userResource, 'list').and.returnValue($q(function(resolve) {
        resolve({
          data: {
            data: users
          }
        });
      }));

      vm = $controller('CreateAppreciationController', {
        flashService: flashService,
        '$state': $state
      });
    }));

    it('should load list of users', function() {
      $scope.$apply();
      expect(vm.users).toEqual(users);
    });

    it('should submit new appreciation to be saved', function() {
      //TODO: Implement with API integration
    });
  });
})();
