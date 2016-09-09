(function() {
  'use strict';

  describe('NavMenuController', function(){
    var vm;
    var $state;
    var authService;
    var $scope;
    var loggedInUser = {
      username: 'gwashington'
    };

    beforeEach(module('flashApp'));
    beforeEach(inject(function($q, $rootScope, _$controller_, _authService_) {
      authService = _authService_;
      $state = {
        current: {
          name: ""
        }
      };

      $scope = $rootScope.$new();

      spyOn(authService, 'getIdentity').and.returnValue($q(function(resolve) {
        resolve(loggedInUser);
      }));

      vm = _$controller_('NavMenuController', {'$state': $state, authService: authService});
      $scope.$apply();
    }));

    describe('initialization', function() {
      it('should set logged in user', function() {
        expect(vm.userName).toEqual(loggedInUser);
      });
    });

    describe('hideMenu()', function() {
      it('should hide the nav menu', function() {
        vm.menuVisible = true;
        vm.hideMenu();

        expect(vm.menuVisible).toBe(false);
      });
    });

    describe('isInSection()', function() {
      it('should return false if current state does not start with input string', function() {
        $state.current.name = 'home';

        expect(vm.isInSection('people')).toBe(false);
      });

      it('should return true if current state starts with input string', function() {
        $state.current.name = 'people:list';

        expect(vm.isInSection('people')).toBe(true);
      });
    });

  });
})();
