import React, { Component } from 'react';
import './App.css';

import TitleBar from './components/TitleBar/TitleBar.js';
import FillerBar from './components/FillerBar/FillerBar.js';
import Footer from './components/Footer/Footer.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar flex={0} />
        <div style={{flex: 1, background: '#gray', height: '100%', display: 'flex', flexDirection: 'column'}}>
          <FillerBar flex={0} />
          <FillerBar flex={0} />
          <FillerBar flex={0} />
        </div>
        <Footer flex={0} />
      </div>
    );
  }
}

// export default App;
