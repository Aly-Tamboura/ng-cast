angular.module('video-player', [])

.controller('videoCnt' ,[ '$sce', '$window', '$scope', function( $sce, $window, $scope) {
  this.data = $window.exampleVideoData;
  this.player = $window.exampleVideoData[0];

}])

.directive('app', function($sce, $window) {

  return {
    restrict: 'E',
    controller: 'videoCnt',
    controllerAs: 'ctrl',
    bindTocontroller: true,
    // controller: function(){
    //   this.selectVideo = function() {

    //   }
    //   this.searchResults = function() {

    //   }

    //   this.currentVideo = {

    //   }

    //   this.videos = [
        
    //   ]
    // },
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
