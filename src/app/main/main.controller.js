(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(flashService, authService) {
    var vm = this;

    var loggedInUser = null;
    authService.getIdentity().then(function(identity) {
      loggedInUser = identity;
    });

    vm.statsLabels = ["Given", "Received"];
    vm.statsData = [];
    vm.userStats = { total: 0, given: 0, received: 0 };

    vm.users = {};
    flashService.resource('users').list().then(function(res) {
      var users = res.data.data;

      for (var i = 0; i < users.length; i++) {
        vm.users[users.id] = users.name;
      }
    });

    flashService.resource('kudos').list().then(function(res) {
      var kudos = res.data.data;
      var myKudos = [];

      for (var i = 0; i < kudos.length; i++) {
        if (kudos[i].nominee === loggedInUser.id) {
          myKudos.push(kudos[i]);
          vm.userStats.total++;
          vm.userStats.received++;
        } else if (kudos[i].nominator == loggedInUser.id) {
          vm.userStats.given++;
          vm.userStats.total++;
        }
      }
      vm.statsData = [vm.userStats.given, vm.userStats.received];
      _.sortBy(myKudos, 'created_date');

      console.log(myKudos);

      vm.kudos = myKudos;
    });

  }
})();
