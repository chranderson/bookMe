import React, { Component } from 'react';
import './Main.css';
import App from './App';

export default class Main extends Component {

  static defaultProps = {
    bars: [
      { name: '1', flex: 1 },
      { name: '2', flex: 1 },
      { name: '3', flex: 1 },
      { name: '4', flex: 1 },
      { name: '5', flex: 1 },
      { name: '6', flex: 1 },
      { name: '7', flex: 1 }
    ]
  }
  constructor() {
    super();
    this.state = {
      today: new Date(),
      night: 'yo its night',
    };
  }

  getDate = () => {
    this.setState({
      today: new Date(),
      night: 'yo its night',
    });
  };


  render() {
    const today = this.state.today;
    return (
      <div className="Main">
        <div className="leftSide">
          <div className="pod">
            {today.toLocaleTimeString()}
          </div>
          <div className="pod">thing 2</div>
        </div>
        <App today={today} onMouseEnter={this.getDate} />
        <div className="rightSide">
          <span className="pod">
            {today.getFullYear()}
          </span>
          <span className="pod">thing blue</span>
        </div>
      </div>
    );
  }
}

// export default App;
