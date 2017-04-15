angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    restrict: 'EA',
    scope: {
      vid: '<',
    },
    controller: function($scope){
      console.log('this is videolistentry ' ,$scope);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl:  'src/templates/videoListEntry.html'
  };
});
