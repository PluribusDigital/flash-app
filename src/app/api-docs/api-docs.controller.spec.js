(function() {
  'use strict';

  describe('ApiDocsController', function(){
    var vm;
    var mockConfig = {
      baseUrl: 'http://some.host/some/path/'
    };

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('ApiDocsController', {
        config: mockConfig
      });
    }));

    it('should generate swagger json URL from config', function() {
      vm.swaggerUrl = mockConfig.baseUrl + "/swagger.json";
    });
  });
})();
