(function() {
  'use strict';
   angular
     .module('flashApp')
     .constant('config', {
      'apiKey': '@@apiKey',
      'baseUrl': '@@baseUrl'
    });
})();
