(function() {
  'use strict';

  describe('MainController', function(){
    var vm, $rootScope;

    beforeEach(module('flashApp'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
      $rootScope = _$rootScope_;

      vm = _$controller_('MainController', {
        $rootScope: $rootScope
      });
    }));

    it('should see all functions', function() {
      expect(angular.isFunction(vm.giveKudo)).toBe(true);
    });

    it('should call vm.giveKudo', function() {
      $rootScope.loggedInUser = {name:"Test Doe"};
      vm.giveKudo("Test");
      expect(vm.createKudo).toBe(false);
    });


  });
})();
