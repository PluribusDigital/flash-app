(function() {
  'use strict';

  describe('MainController', function(){
    var vm;
    var $rootScope;
    var flashService;
    var authService;
    var $state;
    var $q;
    var $scope;
    var userResource = {
      list: function() {}
    };
    var kudoResource = {
      create: function() {}
    };

    beforeEach(module('flashApp'));
    beforeEach(inject(function($controller, _authService_, _flashService_, _$rootScope_, _$state_, _$q_) {
      vm = $controller('MainController');
    }));

    it('load users and kudos', function() {

    });


  });
})();
