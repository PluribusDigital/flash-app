(function() {
  'use strict';

  angular
    .module('flashApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(flashService) {
    var vm = this;
    vm.statsLabels = ["Given", "Received"];
    vm.statsData = [8, 10];
    vm.userStats = { total: 18, given:8, received:10 };
    vm.getAppreciations = getAppreciations;

    vm.getAppreciations();

    function getAppreciations(){
      flashService.resource('appreciations').list().then(function(res){
        vm.appreciations = res.data.data;
      });
    }

  }
})();
