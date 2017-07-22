angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  
  controller: function() {
    this.video = window.exampleVideoData[0];
    
    this.changeVideo = () => {
      console.log('clicked');
      this.video = video;
    };
  }
  
});
