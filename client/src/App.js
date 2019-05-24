import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Navigation from './components/Navigation/Navigation'
import Main from './components/Main/Main'
// import VideoPage from './components/VideoPage/VideoPage'

import talkData from './assets/ted_main_clean.json'

class App extends React.Component {
  state = {
    data: talkData[0]
  }


  render() {
    // console.log(data)
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" render={props => <Main {...props} data={this.state.data}/>} />
          {/* <Route path="/:videoId" render={props => <VideoPage {...props} data={this.state.data}/>} /> */}
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
