import React, { Component } from 'react';
import './TitleBar.css';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class TitleBar extends Component {
  defaultProps = {
    flex: 0,
  }
  render() {
    const {
      flex,
      today
    } = this.props;

    const day = days[today.getDay()];
    const month = months[today.getMonth()];
    return (
      <div className="titleBar" style={{flex: flex}}>
        <a href="https://github.com/chranderson/bookMe" className="name" title="source code">bookMe</a>
        <div className="menu">
          {day.slice(0, 3)} {month.slice(0, 3)} {today.getDate()}
        </div>
      </div>
    );
  }
}
