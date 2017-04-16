angular.module('video-player')

.controller('videoCnt' , function( $window, $scope, youTube) {
  this.data = $window.exampleVideoData;
  this.currentVideo = $window.exampleVideoData[0];
  this.searchResults = function(youTubeData) {
    this.data = youTubeData;
    this.currentVideo = youTubeData[0];
  }
  youTube.search('cats', this.searchResults.bind(this));
  this.selectVideo = (input) => {
    this.currentVideo = input        
  }
  this.searchinput = "";
  this.searchBar = (text) => {
    youTube.search( text , this.searchResults.bind(this));
    this.searchinput = "";
  }
})

.directive('app', function($sce, $window) {
  return {
    restrict: 'E',
    scope: {
      videodata: '<',
      video: '<',
      searchBar: '<',
      searchinput: '<'
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
