angular.module('video-player')
.service('youTube', function($http, $window) {
  
  this.search = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        type: 'video',
        maxResults: 5,
        part: 'snippet',
        q: query,
        videoEmbeddable: 'true',
        key: $window.YOUTUBE_API_KEY
      }
    }).then(function({data}) {
      if (callback) {
        callback(data);
      }
    }, function errorCallback(response) {
      console.log('FAILED');
    });
  };
});
