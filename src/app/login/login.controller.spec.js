(function() {
  'use strict';

  describe('LoginController', function(){
    var vm;
    var $state;

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_) {
      $state = {
        go: function() {

        }
      };

      spyOn($state, 'go');

      vm = _$controller_('LoginController', {'$state': $state});
    }));

    it('should go to the home page when gotoApp() is called', function() {
      vm.gotoApp();

      expect($state.go).toHaveBeenCalledWith('home');
    });
  });
})();
