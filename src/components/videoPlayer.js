angular.module('video-player')
.controller('videoPlayerController', [ '$sce', '$scope', function($sce, $scope) {     
}])
.directive('videoPlayer',function($sce) {
    return {
    restrict: 'EA',
    scope: {
      video: '<',
    },
    controller: 'videoPlayerController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl:  'src/templates/videoPlayer.html',
    controller: function($scope){
      this.url = function(videoId) {
        return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
      }
      console.log('this is videoPlayer' ,$scope);
    },
  };
});
