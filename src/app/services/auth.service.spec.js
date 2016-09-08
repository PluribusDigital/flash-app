(function() {
  'use strict';

  describe('authService', function(){
    var authService;
    var flashService;
    var userResource = {
      get: function() {}
    };
    var $sessionStorage = {};
    var $scope;
    var $q;

    beforeEach(module('flashApp'));
    beforeEach(module(function($provide) {
      $provide.value('$sessionStorage', $sessionStorage);
    }));
    // beforeEach(module(function($provide) {
    //   $provide.constant('config', mockConfig);
    // }));
    beforeEach(inject(function(_$q_, _authService_, _flashService_, $rootScope) {
      $q = _$q_;
      authService = _authService_;
      flashService = _flashService_;
      $scope = $rootScope.$new();
      spyOn(flashService, 'resource').and.returnValue(userResource);
    }));

    afterEach(function() {
      delete $sessionStorage.userCredentials;
    });

    it('should get identity that is already loaded', function(done) {
      var identity = {
        username: 'gwashington'
      };

      authService.setIdentity(identity);
      authService.getIdentity()
        .then(function(retrievedIdentity) {
          expect(retrievedIdentity).toEqual(identity);
          done();
        });
      $scope.$apply();
    });

    it('should load identity using credentials in session storage', function(done) {
      var identity = {
        username: 'gwashington'
      };

      spyOn(userResource, 'get').and.returnValue($q(function(resolve) {
        resolve({
          data: {
            data: identity
          }
        });
      }));

      $sessionStorage.userCredentials = {
        username: 'gwashington',
        password: 'george1'
      };

      authService.getIdentity()
        .then(function(retrievedIdentity) {
          expect(retrievedIdentity).toEqual(identity);
          done();
        });
      $scope.$apply();
    });

    it('should throw error if no identity loaded and no credentials in session storage', function(done) {
      authService.getIdentity()
        .catch(function() {
          done();
        });
      $scope.$apply();
    });

    it('should authenticate with provided credentials', function(done) {
      var identity = {
        username: 'tjefferson'
      };

      spyOn(userResource, 'get').and.returnValue($q(function(resolve) {
        resolve({
          data: {
            data: identity
          }
        });
      }));

      authService.authenticate('tjefferson', 'thomas3')
        .then(function(retrievedIdentity) {
          expect(retrievedIdentity).toEqual(identity);
          done();
        });
      $scope.$apply();

      expect($sessionStorage.userCredentials).toEqual({
        username: 'tjefferson',
        password: 'thomas3'
      });
    });

    it('should raise error if it could not authenticate with provided credentials', function(done) {
      spyOn(userResource, 'get').and.returnValue($q(function(resolve, reject) {
        reject({});
      }));

      authService.authenticate('tjefferson', 'thomas321')
        .catch(function() {
          done();
        });
      $scope.$apply();
    });

    it('should remove credentials and unset identity when logging out', function(done) {
      $sessionStorage.userCredentials = {
        username: 'gwashington',
        password: 'george1'
      };

      authService.setIdentity({
        username: 'gwashington'
      });

      authService.unauthenticate();

      authService.getIdentity().catch(function() {
        done();
      });
      $scope.$apply();

      expect($sessionStorage.userCredentials).toEqual(null);

    });
  });
})();
