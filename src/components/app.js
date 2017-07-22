angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.start = () => {
      youTube.search('cats', (response) => {
        this.videos = response.items;
        this.currentVideo = response.items[0];
      });
    };
    this.start();
    this.searchResults = (query) => {
      youTube.search(query, (response) => {
        this.videos = response.items;
        this.currentVideo = response.items[0];
      });
    };
    this.onClick = (video) => {
      console.log('click', this);
      this.currentVideo = video;
    };
    
  }
});
