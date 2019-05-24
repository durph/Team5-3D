import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoDetails from './components/VideoDetails/VideoDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href={`http://localhost:8080/ping`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Local Express Server ping
        </a>
      </header>
      <VideoDetails />
    </div>
  );
}

export default App;
