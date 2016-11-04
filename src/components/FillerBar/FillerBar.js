import React, { Component } from 'react';
import './FillerBar.css';

export default class FillerBar extends Component {
  static defaultProps = {
    label: 'This is a',
    text: 'FillerBar',
    flex: 0,
    height: '2em',
  }

  _getStyle = () => {
    const {
      flex,
      height,
    } = this.props;

    return {
      flex: flex,
      minHeight: height,
      // borderTop: 'darkgray',
    }
  }

  render() {
    const {
      label,
      text,
    } = this.props;
    return (
      <div className={'fillerBar'} style={this._getStyle()}>
        {label}
        <span className={'textSpan'}>{text}</span>
      </div>
    );
  }
}

// export default App;
