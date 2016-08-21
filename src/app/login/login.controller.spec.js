(function() {
  'use strict';

  describe('LoginController', function(){
    var vm;

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('LoginController');
    }));

    it('should go to the home page when login() is called', function() {
      spyOn(vm, 'setCredentials').and.callThrough();
      vm.login("gwashington", "george1");
      expect(vm.setCredentials).toHaveBeenCalledWith("gwashington", "george1");
    });
  });
})();
