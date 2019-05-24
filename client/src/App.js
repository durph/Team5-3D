import React from 'react';
import logo from './logo.svg';
import './App.css';
import talkData from './assets/ted_main_clean.json'

class App extends React.Component {
  state = {
    data: talkData
  }


  render() {
    // console.log(data)
  return (
    <div className="App">
      {this.state.data.filter(item => item.tags.includes('climate change')).map((tagItem,i) => <p key={i} className="comment">{tagItem.name}</p> )}
    </div>
  );
}
}

export default App;
