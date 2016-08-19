(function() {
  'use strict';

  describe('AppController', function(){
    var vm;

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('AppController');
    }));

    it('should toggle the nav menu', function() {
      expect(vm.showNavMenu).toBe(false);

      vm.toggleNavMenu();

      expect(vm.showNavMenu).toBe(true);

      vm.toggleNavMenu();

      expect(vm.showNavMenu).toBe(false);
    });
  });
})();
