(function() {
  'use strict';

  describe('CreateKudoController', function(){
    var vm;
    var $rootScope;
    var flashService;
    var authService;
    var $state;
    var $q;
    var $scope;
    var userResource = {
      list: function() {}
    };
    var kudoResource = {
      create: function() {}
    };
    var users = [
      {
        username: 'gwashington'
      },
      {
        username: 'tjefferson'
      }
    ];
    var loggedInUser = {
      username: 'bobama'
    };

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
      $state = _$state_;

      spyOn(authService, 'getIdentity').and.returnValue($q(function(resolve) {
        resolve(loggedInUser);
      }));

      spyOn(flashService, 'resource').and.callFake(function(resourceName) {
        var returnValueMap = {
          'users': userResource,
          'kudos': kudoResource
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

      vm = $controller('CreateKudoController', {
        flashService: flashService,
        '$state': $state
      });
      $scope.$apply();
    }));

    it('should load users for autocomplete', function() {
      expect(vm.userAutocompleteDataset).toEqual(users);
    });

    it('should load current logged in user', function() {
      expect(vm.loggedInUser).toEqual(loggedInUser);
    });

    it('should submit new kudo to api', function() {
      // vm.kudo = {
      //   nominee: 1234,
      //   nominator: 2345,
      //   category: 'Teamwork',
      //   comment: 'Test 1234'
      // };
      // var createdKudo =
      //
      // spyOn(kudoResource, 'create').and.returnValue($q(function(resolve) {
      //   resolve(createdKudo);
      // }));
      //
      // vm.submit();


    });
  });
})();
