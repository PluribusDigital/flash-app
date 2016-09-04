(function() {
  'use strict';

  describe('Autocomplete Directive', function(){
    var $scope, $compile;

    beforeEach(module('flashApp'));
    beforeEach(inject(function ($rootScope, _$compile_) {
      $scope = $rootScope.$new(),
      $compile = _$compile_;

      $scope.autocompleteModel = {};
      $scope.autocompleteOptions = {};
      $scope.autocompleteDataset = {
        source: function() {}
      };

      $compile(
        '<autocomplete model="autocompleteModel" options="autocompleteOptions" datasets="autocompleteDataset">' +
        '<script type="text/template" data-template="suggestion"><strong>{{name}}</strong> - {{age}}</script>' +
        '<script type="text/template" data-template="empty">No results found!</script>' +
        '</autocomplete>')($scope);

      $scope.$digest()
    }));

    it('should add templates to dataset', function() {
      expect($scope.autocompleteDataset.templates.suggestion).toBeDefined();
      expect($scope.autocompleteDataset.templates.empty).toBeDefined();

      expect($scope.autocompleteDataset.templates.suggestion({
        name: 'Jon',
        age: 32
      })).toEqual("<strong>Jon</strong> - 32");
      expect($scope.autocompleteDataset.templates.empty({}))
        .toEqual("No results found!");
    });
  });
})();
