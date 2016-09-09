(function() {
  'use strict';

  describe('AddUserController', function(){
    var vm;
    var $rootScope;
    var flashService;
    var authService;
    var $q;
    var $scope;
    var userResource = {
      list: function() {},
      create: function() {}
    };
    var loggedInUser = {
      id: 2345,
      username: 'bobama'
    };
    var users = [
      {
        username: 'gwashington'
      },
      {
        username: 'tjefferson'
      }
    ];

    beforeEach(module('flashApp'));
    beforeEach(module('flashApp.core', function(AngularyticsProvider) {
      AngularyticsProvider.setEventHandlers(['Console']);
    }));
    beforeEach(inject(function($controller, _authService_, _flashService_, _$rootScope_, _$state_, _$q_) {
      $q = _$q_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      flashService = _flashService_;
      authService = _authService_;

      spyOn(authService, 'getIdentity').and.returnValue($q(function(resolve) {
        resolve(loggedInUser);
      }));

      spyOn(flashService, 'resource').and.callFake(function(resourceName) {
        var returnValueMap = {
          'users': userResource
        };

        return returnValueMap[resourceName];
      });

      spyOn(userResource, 'list').and.returnValue($q(function(resolve) {
        resolve({
          data: {
            data: users
          }
        });
      }));

      vm = $controller('AddUserController', {
        flashService: flashService
      });
      $scope.$apply();
    }));

    it('should load current logged in user', function() {
      expect(vm.loggedInUser).toEqual(loggedInUser);
    });

    it('should submit new kudo to api', function() {
      vm.new_user = {
        first_name: 'Test',
        last_name: 'McTestman',
        email: 'Test@email.com'
      };
      var createdUser = {
        username: "testuser",
        password: "testuser"
      };

      spyOn(userResource, 'create').and.returnValue($q(function(resolve) {
        resolve(createdUser);
      }));

      vm.submit();
      $scope.$apply();

      var expectedUser = {
        first_name: 'Test',
        last_name: 'McTestman',
        email: 'Test@email.com'
      };

      //expect(userResource.create).toHaveBeenCalledWith(expectedUser);
      //expect(vm.user).toEqual({});
      //expect(vm.userSubmitted).toBe(true);


    });
  });
})();
