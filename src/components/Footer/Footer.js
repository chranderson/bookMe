import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  defaultProps = {
    flex: 0,
  }
  render() {
    const {
      flex,
      today
    } = this.props;
    return (
      <footer className="footer" style={{flex: flex}}>
        <span>
          copyright {today.getFullYear()}.
        </span>
        <span>
          {today.toLocaleTimeString()}
        </span>
      </footer>
    );
  }
}

// export default App;
