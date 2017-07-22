angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData,
    this.currentVideo;
    this.onClick = (video) => {
      console.log('click', this);
      this.currentVideo = video;
    };
  }
});
