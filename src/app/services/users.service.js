(function() {
  'use strict';

  angular
    .module('flashApp')
    .factory('userService', function () {
      return {
        getAllUsers: getAllUsers,
        getUser: getUser,
        searchUsers: searchUsers
      }
    });

  var mockData = [
    {
      "username": "gwashington",
      "name": "George Washington",
      "title": "President",
      "organization": "White House",
      "department": "Oval Office"
    },
    {
      "username": "bobama",
      "name": "Barrack Obama",
      "title": "President",
      "organization": "White House",
      "department": "Oval Office"
    },
    {
      "username": "bharper",
      "name": "Bryce Harper",
      "title": "Right Fielder",
      "organization": "Washington Nationals",
      "department": "Outfield"
    },
    {
      "username": "hclinton",
      "name": "Hillary Clinton",
      "title": "Secretary of State",
      "organization": "White House",
      "department": "State Department"
    },
    {
      "username": "bdole",
      "name": "Bob Dole",
      "title": "Bob Dole",
      "organization": "Bob Dole",
      "department": "Bob Dole"
    }
  ];

  function getUser(username) {
    var user = _.filter(mockData, ['username', username]);
    if (user.length > 0) {
      return user[0];
    }
    return null;
  }

  function getAllUsers(offset, limit) {
    return _getSubset(mockData, offset, limit);
  }

  function _getSubset(data, offset, limit) {
    if (!offset) {
      offset = 0;
    }

    if (!limit) {
      limit = 10;
    }

    var total = data.length;
    if (offset > (total-1)) {
      return [];
    }

    if ((offset + limit) > total) {
      limit = total - offset;
    }

    return data.slice(offset, offset + limit);
  }

  function searchUsers(keywords, offset, limit) {
    keywords = keywords.toLowerCase();
    return _getSubset(_.filter(mockData, function(item) {
      var fields = ['username', 'name', 'title', 'organization', 'department'];
      for (var i = 0, len = fields.length; i < len; i++) {
        if (item[fields[i]].toLowerCase().indexOf(keywords) != -1) {
          return true;
        }
      }
      return false;
    }), offset, limit);
  }
})();
