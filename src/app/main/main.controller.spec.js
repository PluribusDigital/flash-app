(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));


  });
})();
