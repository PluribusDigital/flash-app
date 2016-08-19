(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('NavMenuController');
    }));

    it('should hide the nav menu when hideMenu() is called', function() {
      vm.menuVisible = true;
      vm.hideMenu();

      expect(vm.menuVisible).toBe(false);
    });
  });
})();
