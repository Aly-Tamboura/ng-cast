angular.module('video-player')
.directive('videoList', function() {
  return {
    restrict: 'EA',
    scope: {
      videodata: '<'
    },
    controller: function($scope){
      console.log('this is video list ' ,$scope);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html'
  };
});
