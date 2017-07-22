angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData,
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = (video) => {
    };
    this.searchResults = () => {
      
    };
    this.onClick = (video) => {
      console.log('click', this);
      this.currentVideo = video;
    };
  }
});
