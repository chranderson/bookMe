import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  defaultProps = {
    flex: 0,
  }
  render() {
    const {
      flex,
    } = this.props;
    return (
      <footer className="footer" style={{flex: flex}}>
        copyright 2016.
      </footer>
    );
  }
}

// export default App;
