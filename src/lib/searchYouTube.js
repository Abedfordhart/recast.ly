var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      embeddable: true
    },
    success: (data) => {
      callback(data);
    },
    error: () => {
      console.log('Request failed');
    }
  })  

};

window.searchYouTube = searchYouTube;
