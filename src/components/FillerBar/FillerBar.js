import React, { Component } from 'react';
import './FillerBar.css';

export default class FillerBar extends Component {
  static defaultProps = {
    text: 'This is a FillerBar',
    flex: 0,
    height: '2em',
  }

  _getStyle() {

    const {
      flex,
      height,
      text
    } = this.props;

    console.log(flex, height, text);

    return {
      flex: flex,
      minHeight: height,
      // borderTop: 'darkgray',
    }
  }

  render() {
    const {
      text,
    } = this.props;
    return (
      <div className={'fillerBar'} style={this._getStyle()}>
        {text}
        <div className={'details'}>h {this.props.height}</div>
      </div>
    );
  }
}

// export default App;
