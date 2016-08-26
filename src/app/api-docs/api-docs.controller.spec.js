(function() {
  'use strict';

  describe('ApiDocsController', function(){
    var vm;
    var mockConfig = {
      baseUrl: 'http://some.host/some/path/',
      apiKey: 'test123'
    };

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('ApiDocsController', {
        config: mockConfig
      });
    }));

    it('should generate swagger json URL from config', function() {
      expect(vm.swaggerUrl).toEqual(mockConfig.baseUrl + "v1/?api_key=" + mockConfig.apiKey);
    });
  });

  describe('apiDocsSwaggerModule', function(){
    var $rootScope;
    var apiDocsSwaggerModule;
    var mockConfig = {
      baseUrl: 'http://some.host/some/path/',
      apiKey: 'test123'
    };

    beforeEach(module('flashApp'));
    beforeEach(module(function($provide) {
      $provide.constant('config', mockConfig);
    }));
    beforeEach(inject(function(_$rootScope_, _apiDocsSwaggerModule_) {
      apiDocsSwaggerModule = _apiDocsSwaggerModule_;
      $rootScope = _$rootScope_;
      $rootScope.username = 'jon';
      $rootScope.password = 'minter';
    }));

    it('should add authorization header to swagger request', function() {
      var options = {
        url: 'http://some.host/some/path/?api_key=test'
      };

      apiDocsSwaggerModule.execute(options);

      expect(options.headers.Authorization).toEqual('Basic am9uOm1pbnRlcg==');
      expect(options.url).toEqual('http://some.host/some/path/?api_key=test');
    });

    it('should add api key if not in url', function() {
      var options = {
        url: 'http://some.host/some/path/'
      };

      apiDocsSwaggerModule.execute(options);

      expect(options.url).toEqual('http://some.host/some/path/?api_key=test123');
    });

    it('should append api key to query params if not in url', function() {
      var options = {
        url: 'http://some.host/some/path/?some_param=some_value'
      };

      apiDocsSwaggerModule.execute(options);

      expect(options.url).toEqual('http://some.host/some/path/?some_param=some_value&api_key=test123');
    });
  });
})();
