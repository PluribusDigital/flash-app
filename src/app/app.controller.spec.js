(function() {
  'use strict';

  describe('AppController', function(){
    var vm;
    var authService;
    var $state;

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_, _authService_, _$state_) {
      authService = _authService_;
      $state = _$state_;
      vm = _$controller_('AppController', {
        authService: authService,
        '$state': $state
      });
    }));

    it('should toggle the nav menu', function() {
      expect(vm.showNavMenu).toBe(false);

      vm.toggleNavMenu();

      expect(vm.showNavMenu).toBe(true);

      vm.toggleNavMenu();

      expect(vm.showNavMenu).toBe(false);
    });

    it('should logout', function() {
      spyOn(authService, 'unauthenticate');
      spyOn($state, 'go');

      vm.logout();

      expect(authService.unauthenticate).toHaveBeenCalled();
      expect($state.go).toHaveBeenCalledWith('login');
    });
  });
})();
