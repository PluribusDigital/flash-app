(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $rootScope) {
    var vm = this;
    vm.userStats = { total: 18, given:8, received:10 };
    vm.kudo = {};
    vm.giveKudo = giveKudo;
    vm.mockNotifications = [
      {
        type: "Request",
        by: "John Doe",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        type: "Recognition",
        by: "Ben E.",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        type: "Reminder",
        by: "Ronald M.",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ];

    function giveKudo(kudo){
      //kudoService.kudos.addKudo().then(function(){
      //   vm.createKudo = false;
      //});
      vm.createKudo = false;
      kudo.from = $rootScope.loggedInUser.name;
    }

  }
})();
