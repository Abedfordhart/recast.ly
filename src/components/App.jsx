class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlayer: exampleVideoData[0],
      videoList: exampleVideoData
    };
  },

  //on click
    //set videoplayer to exampleVideoData[clicked]

  render() {
    return (
      <div>
      <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {exampleVideoData[0]} state = {this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {exampleVideoData} state = {this.state}/> 
        }
        </div>
      </div>);
    
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


// videoPlayer props = {
//   video: exampleVideoData[0],
//   state: {
//       videoPlayer: exampleVideoData[0],
//       videoList: exampleVideoData
//     }
// }