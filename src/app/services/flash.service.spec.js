(function() {
  'use strict';

  describe('flashService', function(){
    var flashService;
    var $httpBackend;
    var mockConfig = {
      baseUrl: 'http://www.somehost.com/path/to/api/',
      apiKey: 'test12345'
    };
    var gwashingtonUser = {
      meta: {},
      data: {id: 12345, username: 'gwashington'}
    };

    beforeEach(module('flashApp'));
    beforeEach(module(function($provide) {
      $provide.constant('config', mockConfig);
    }));
    beforeEach(inject(function(_flashService_, _$httpBackend_) {
      flashService = _flashService_;
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should retrieve a list of resource items', function() {
      var userList = {
        meta: {},
        data: [
          {id: 123, username: 'gwashington'},
          {id: 234, username: 'jadams'}
        ]
      },
      actualResponse;

      $httpBackend
        .when('GET', 'http://www.somehost.com/path/to/api/v1/users?api_key=test12345')
        .respond(userList);

      flashService
        .resource('users')
        .list()
        .then(function(response) {
          actualResponse = response;
        });

      $httpBackend.flush();
      expect(actualResponse.data).toEqual(userList);
    });

    it('should retrieve a single resource item', function() {
      var user = gwashingtonUser,
      actualResponse;

      $httpBackend
        .when('GET', 'http://www.somehost.com/path/to/api/v1/users/12345?api_key=test12345')
        .respond(user);

      flashService
        .resource('users')
        .get(12345)
        .then(function(response) {
          actualResponse = response;
        });

      $httpBackend.flush();
      expect(actualResponse.data).toEqual(user);
    });

    it('should create a resource item', function() {
      var user = gwashingtonUser,
      createData = {
        username: 'gwashington'
      },
      actualResponse;

      $httpBackend
        .when('POST', 'http://www.somehost.com/path/to/api/v1/users?api_key=test12345', createData)
        .respond(user);

      flashService
        .resource('users')
        .create(createData)
        .then(function(response) {
          actualResponse = response;
        });

      $httpBackend.flush();
      expect(actualResponse.data).toEqual(user);
    });

    it('should update a resource item', function() {
      var user = {
        meta: {},
        data: {id: 12345, username: 'gwashington'}
      },
      updateData = {
        username: 'gwashington'
      },
      actualResponse;

      $httpBackend
        .when('POST', 'http://www.somehost.com/path/to/api/v1/users/12345?api_key=test12345', updateData)
        .respond(user);

      flashService
        .resource('users')
        .update(12345, updateData)
        .then(function(response) {
          actualResponse = response;
        });

      $httpBackend.flush();
      expect(actualResponse.data).toEqual(user);
    });

    it('should delete a resource item', function() {
      var user = {
        meta: {},
        data: {id: 12345, deleted: true}
      },
      actualResponse;

      $httpBackend
        .when('DELETE', 'http://www.somehost.com/path/to/api/v1/users/12345?api_key=test12345')
        .respond(user);

      flashService
        .resource('users')
        .delete(12345)
        .then(function(response) {
          actualResponse = response;
        });

      $httpBackend.flush();
      expect(actualResponse.data).toEqual(user);
    });

  });
})();
