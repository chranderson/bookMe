import React, { Component } from 'react';
import './App.css';

import TitleBar from './components/TitleBar/TitleBar.js';
import FillerBar from './components/FillerBar/FillerBar.js';
import Footer from './components/Footer/Footer.js';

export default class App extends Component {

  static defaultProps = {
    bars: [
      { name: '1', flex: 0 },
      { name: '2', flex: 0 },
      { name: '3', flex: 0 },
      { name: '4', flex: 0 },
      { name: '5', flex: 0 },
      { name: '6', flex: 0 },
      { name: '7', flex: 0 }
    ]
  }

  getDate() {
    const today = new Date();
    // return today.toUTCString();
    return today.toDateString();
  }

  getTime() {
    const today = new Date();
    return today.toLocaleTimeString();
  }

  renderBars() {
    const bars = this.props.bars;
    return bars.map((bar, index) => <FillerBar key={index} flex={bar.flex} label={`cabin ${bar.name}`} text={''} />);
  }

  render() {
    return (
      <div className="App">
        <TitleBar flex={0} />
        <div style={{flex: 1, background: '#gray', height: '100%', display: 'flex', flexDirection: 'column'}}>
          <FillerBar flex={0} label={'Today is'} text={this.getDate()} />
          <FillerBar flex={0} label={'The Time is'} text={this.getTime()} />
          { this.renderBars() }
          <FillerBar flex={1} label={'dates label for cabins'} text={null} />
        </div>
        <Footer flex={0} />
      </div>
    );
  }
}

// export default App;
