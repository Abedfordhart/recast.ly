var searchYouTube = (options, callback) => {
  // TODO
  var youTubeUrl = 'https://www.googleapis.com/youtube/v3/search'
    
    $.ajax({
      url: youTubeUrl,
      type: 'GET',
      data: {
        part: 'snippet',
        type: 'video'
      }
      embeddable: true;
    });  
};

window.searchYouTube = searchYouTube;
