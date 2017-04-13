class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayer: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  onVideoClick(vid) { 
    this.setState({
      videoPlayer: vid
    })
 //   console.log(video);
  }

  render() {
    return (
      <div>
      <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {this.state.videoPlayer}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {exampleVideoData} playNewVideo = {this.onVideoClick.bind(this)}/> 
        </div>
      </div>);
    
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
