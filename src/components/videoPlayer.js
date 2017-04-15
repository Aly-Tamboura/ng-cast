angular.module('video-player')
.controller('videoPlayerController', [ '$sce', function($sce) {
}])
.directive('videoPlayer',function($sce) {
    return {
    restrict: 'EA',
    scope: {
      videoplayer: '<',
    },
    controller: function($scope){
      this.url = function(videoId) {
        return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
      }
      // console.log('this is videoPlayer' ,$scope);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl:  'src/templates/videoPlayer.html'
  };
});
