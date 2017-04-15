angular.module('video-player')

.directive('videoPlayer', function() {
    return {
    restrict: 'EA',
    scope: {
      videoplayer: '<',
    },
    controller: function($scope){
      $scope.getIframeSrc = function (videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
      }
      console.log('this is videoPlayer' ,$scope);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl:  'src/templates/videoPlayer.html'
  };
});
