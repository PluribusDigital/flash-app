(function() {
  'use strict';

  describe('MainController', function(){
    var vm, appListDefer, $q, flashService, $scope;
    var appResource = {
      list: function() {}
    };
    var appreciations = [
      {'test': 'Test Appreciation'}
    ];

    beforeEach(module('flashApp'));
    beforeEach(inject(function($controller, _flashService_, _$q_, _$rootScope_) {
      $scope = _$rootScope_.$new();
      $q = _$q_;
      flashService = _flashService_;

      spyOn(flashService, 'resource').and.returnValue(appResource);
      appListDefer = $q.defer();
      spyOn(appResource, 'list').and.returnValue(appListDefer.promise);

      vm = $controller('MainController', {
        flashService: flashService
      });
    }));

    it('should run the getAppreciations function', function() {
      expect(angular.isFunction(vm.getAppreciations)).toBe(true);
      vm.getAppreciations();
      appListDefer.resolve({
        data: {
          data: appreciations
        }
      });
      $scope.$apply();

      expect(flashService.resource).toHaveBeenCalledWith('appreciations');
      expect(appResource.list).toHaveBeenCalled();

      expect(vm.appreciations).toEqual(appreciations);
    });

  });
})();
