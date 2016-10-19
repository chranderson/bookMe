import React, { Component } from 'react';
import './TitleBar.css';

export default class TitleBar extends Component {
  defaultProps = {
    flex: 0,
  }
  render() {
    const {
      flex,
    } = this.props;
    return (
      <div className="titleBar" style={{flex: flex}}>
        <a href="https://github.com/chranderson/bookMe" className="name" title="source code">bookMe</a>
        <div className="menu" />
      </div>
    );
  }
}
