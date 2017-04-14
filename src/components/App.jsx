class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayer: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  componentDidMount() {
    this.getYouTubeVideo('cats');
  }

  getYouTubeVideo(query) {
    var option = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 5
    };

    this.props.searchYouTube(option, (data) => {
      this.setState({
        videoPlayer: data.items[0],
        videoList: data.items
      });
    });
  }

  onVideoClick(vid) { 
    this.setState({
      videoPlayer: vid
    });
  }

  render() {
    return (
      <div>
      <Nav getYouTubeVideo = {this.getYouTubeVideo.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video = {this.state.videoPlayer}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.state.videoList} playNewVideo = {this.onVideoClick.bind(this)}/> 
        </div>
      </div>);
    
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
