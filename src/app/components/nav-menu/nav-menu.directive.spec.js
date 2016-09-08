(function() {
  'use strict';

  describe('NavMenuController', function(){
    var vm;
    var $state;

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_) {
      $state = {
        current: {
          name: ""
        }
      };

      vm = _$controller_('NavMenuController', {'$state': $state});
    }));

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
