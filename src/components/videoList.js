angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  
  controller: function() {
    this.videos = window.exampleVideoData;
    this.handleClick = function() {
      console.log('click');
    };
  }
  
});


