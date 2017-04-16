angular.module('video-player')

.service('youTube', function($http, $window) {
  this.search = function( search, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: search,
        type: 'video',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    })
    .then(function({data}) {
      //if (callback) {
       // console.log('this is success from youtube ' ,data)
        callback(data.items);
      //}
    })
    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
});

//aly [11:21 AM] “https://www.googleapis.com/youtube/v3/search?part=snippet&q=“.urlencode($kwd).“&maxResults=“.$max.“&order=viewCount&key={YOUR_API_KEY}”