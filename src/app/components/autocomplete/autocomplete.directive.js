(function() {
  'use strict';

  angular
    .module('flashApp')
    .directive('autocomplete', function () {
      return {
        retrict: 'E',
        scope: {
          model: '=',
          options: '=',
          datasets: '='
        },
        transclude: true,
        templateUrl: 'app/components/autocomplete/autocomplete.html',
        link: autocompleteLink
      }
    });

  function autocompleteLink(scope, element) {
    var templates = $(element).find('script[type="text/template"]');

    templates.each(function(index, template) {
      var templateType = $(template).attr('data-template');
      scope.datasets.templates[templateType] = Handlebars.compile(template.text);
    });
  }
})();
