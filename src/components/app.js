angular.module('video-player', [])

.controller('videoCnt' ,[ '$sce', '$window', '$scope', function( $sce, $window, $scope) {
  this.data = $window.exampleVideoData;
  this.videoData = $window.exampleVideoData[0];
  // this.selectVideo = function(input) {
  //   console.log('clicked', input)
  //   console.log('this is tha player value ', $window.exampleVideoData[0])
  // 
  //console.log('this is in the consoler ', $scope)

  this.searchResults = function() {

  }

  this.selectVideo = (input) => {
  this.videoData = input        
  }
  this.currentVideo = {

  }
}])


.directive('app', function($sce, $window) {
  return {
    restrict: 'E',
    scope: {
      videodata: '<',
      video: '<',
    },
    controller: 'videoCnt',
    controllerAs: 'ctrl',
    bindTocontroller: true,
    //   // $http({
    //   //     method: 'JSONP',
    //   //     url: url + city
    //   //   }).success(function(data) {
    //   //     var weather = [];
    //   //     angular.forEach(data.list, function(value){
    //   //       weather.push(value);
    //   //     });
    //   //     $scope.weather = weather;
    //   //   });
    // },
    templateUrl: 'src/templates/app.html' 
  }
});
