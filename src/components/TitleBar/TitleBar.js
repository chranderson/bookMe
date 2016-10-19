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
        <span className="name">bookMe</span>
        <div className="menu" />
      </div>
    );
  }
}
