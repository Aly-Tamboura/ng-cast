angular.module('video-player')

.directive('search', function() {
  return {
    controller: function($scope) {
    },
    restrict: 'E',
    scope: {
      searchBar: '<'
    },
    controllerAs: 'ctrl',
    bindTocontroller: true,
    templateUrl: "/src/templates/search.html"
    };

});
