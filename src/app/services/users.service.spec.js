(function() {
  'use strict';

  describe('controllers', function(){
    var userService;

    beforeEach(module('flashApp'));
    beforeEach(inject(function(_userService_) {
      userService = _userService_;
    }));

    it('should retrieve a list of all users', function() {
      var users = userService.getAllUsers(0, 10);
      expect(users.length > 0).toBe(true);
    });

    it('should retrieve a single users', function() {
      var user = userService.getUser("bdole");
      expect(typeof user).toBe("object");
    });

    it('should search users', function() {
      var users = userService.searchUsers('White House', 0, 10);
      expect(users.length).toBe(3);
    });


  });
})();
