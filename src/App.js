import React, { Component } from 'react';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar.js';
import FillerBar from './components/FillerBar/FillerBar.js';
import Footer from './components/Footer/Footer.js';

export default class App extends Component {

  static defaultProps = {
    bars: [
      { name: '1', flex: 1 },
      { name: '2', flex: 1 },
      { name: '3', flex: 1 },
      { name: '4', flex: 1 },
      { name: '5', flex: 1 },
      { name: '6', flex: 1 },
      { name: '7', flex: 1 },
    ]
  }

  renderBars = () => this.props.bars.map((bar, index) => <FillerBar key={index} flex={bar.flex} label={`cabin ${bar.name}`} text={''} />);


  render() {
    const {
      today
    } = this.props;
    return (
      <div className="NewApp" onMouseEnter={this.props.onMouseEnter}>
        <TitleBar flex={0} title={'checkout my dates'} today={today} />
        <div className="content" onClick={this.getDate}>
          <FillerBar flex={0} label={'new Date()'} text={today.toString()} />
          <FillerBar flex={0} label={'.getDate'} text={today.getDate()} />
          <FillerBar flex={0} label={'.getDay'} text={today.getDay()} />
          <FillerBar flex={0} label={'.getFullYear'} text={today.getFullYear()} />
          <FillerBar flex={0} label={'.getHours'} text={today.getHours()} />
          <FillerBar flex={0} label={'.getMilliseconds'} text={today.getMilliseconds()} />
          <FillerBar flex={0} label={'.getMinutes'} text={today.getMinutes()} />
          <FillerBar flex={0} label={'.getMonth'} text={today.getMonth()} />
          <FillerBar flex={0} label={'.getSeconds'} text={today.getSeconds()} />
          <FillerBar flex={0} label={'.getTime'} text={today.getTime()} />
          <FillerBar flex={0} label={'.getTimezoneOffset'} text={today.getTimezoneOffset()} />
          <FillerBar flex={0} label={'.getUTCDate'} text={today.getUTCDate()} />
          <FillerBar flex={0} label={'.getUTCDay'} text={today.getUTCDay()} />
          <FillerBar flex={0} label={'.getUTCFullYear'} text={today.getUTCFullYear()} />
          <FillerBar flex={0} label={'.getUTCHours'} text={today.getUTCHours()} />
          <FillerBar flex={0} label={'.getUTCMilliseconds'} text={today.getUTCMilliseconds()} />
          <FillerBar flex={0} label={'.getUTCMinutes'} text={today.getUTCMinutes()} />
          <FillerBar flex={0} label={'.getUTCMonth'} text={today.getUTCMonth()} />
          <FillerBar flex={0} label={'.getUTCSeconds'} text={today.getUTCSeconds()} />
          <FillerBar flex={0} label={'.getUTCSeconds'} text={today.getUTCSeconds()} />
          <FillerBar flex={0} label={'.getYear'} text={today.getYear()} />
          <FillerBar flex={0} label={'.toDateString'} text={today.toDateString()} />
          <FillerBar flex={0} label={'.toGMTString'} text={today.toGMTString()} />
          <FillerBar flex={0} label={'.toISOString'} text={today.toISOString()} />
          <FillerBar flex={0} label={'.toLocaleDateString'} text={today.toLocaleDateString()} />
          <FillerBar flex={0} label={'.toLocaleFormat'} text={'dont do it'} strike />
          <FillerBar flex={0} label={'.toLocaleString'} text={today.toLocaleString()} />
          <FillerBar flex={0} label={'.toLocaleTimeString'} text={today.toLocaleTimeString()} />
          <FillerBar flex={0} label={'.toSource'} text={'just dont do it'} strike />
        </div>

      </div>
    );
  }
}

// export default App;
