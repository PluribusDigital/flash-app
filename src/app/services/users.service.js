(function() {
  'use strict';

  angular
    .module('flashApp')
    .factory('userService', userService);

    function userService($rootScope, $log, $window, $q, flashService) {

      var users = {

        loginUser: function() {
          return $q(function (resolve) {
            flashService.users.getUser($rootScope.username).then(function (response) {
              resolve(response);
            });
          });
        }
      };

      return {
        users: users
      };
    }

    // function getUser(username) {
    //   var user = _.filter(mockData, ['username', username]);
    //   if (user.length > 0) {
    //     return user[0];
    //   }
    //   return null;
    // }
    //
    // function getAllUsers(offset, limit) {
    //   return _getSubset(mockData, offset, limit);
    // }
    //
    // function _getSubset(data, offset, limit) {
    //   if (!offset) {
    //     offset = 0;
    //   }
    //
    //   if (!limit) {
    //     limit = 10;
    //   }
    //
    //   var total = data.length;
    //   if (offset > (total-1)) {
    //     return [];
    //   }
    //
    //   if ((offset + limit) > total) {
    //     limit = total - offset;
    //   }
    //
    //   return data.slice(offset, offset + limit);
    // }
    //
    // function searchUsers(keywords, offset, limit) {
    //   keywords = keywords.toLowerCase();
    //   return _getSubset(_.filter(mockData, function(item) {
    //     var fields = ['username', 'name', 'title', 'organization', 'department'];
    //     for (var i = 0, len = fields.length; i < len; i++) {
    //       if (item[fields[i]].toLowerCase().indexOf(keywords) != -1) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }), offset, limit);
    // }
})();
