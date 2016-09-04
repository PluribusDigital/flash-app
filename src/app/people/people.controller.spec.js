(function() {
  'use strict';

  describe('PeopleController', function(){
    var vm;
    var flashService;
    var $q;
    var $scope;
    var userResource = {
      list: function() {}
    };
    var users = {
      meta: {},
      data: [
        {'username': 'gwashington'},
        {'username': 'jadams'}
      ]
    };
    var userListDefer;

    beforeEach(module('flashApp'));
    beforeEach(module('flashApp.core', function(AngularyticsProvider) {
      AngularyticsProvider.setEventHandlers(['Console']);
    }));
    beforeEach(inject(function($controller, _flashService_, _$q_, _$rootScope_) {
      $scope = _$rootScope_.$new();
      $q = _$q_;
      flashService = _flashService_;
      spyOn(flashService, 'resource').and.returnValue(userResource);
      userListDefer = $q.defer();
      spyOn(userResource, 'list').and.returnValue(userListDefer.promise);

      vm = $controller('PeopleController', {
        flashService: flashService
      });
    }));

    it('should retrieve all users', function() {
      userListDefer.resolve(users);
      $scope.$apply();

      expect(flashService.resource).toHaveBeenCalledWith('users');
      expect(userResource.list).toHaveBeenCalled();

      expect(vm.peopleList).toEqual(users);
    });
  });
})();
