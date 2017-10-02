import React, { Component } from 'react';
import {Button} from './button/button';
import Timer from './Timer/Timer';
import './App.scss';

const clientList = [
  {
    id: 0,
    client: 'Aurelo',
    project: 'design something',
    date: '20. September 2017',
    time: '02:30:15',
    earned: 120,
  },
  {
    id: 1,
    client: 'Nikdin',
    project: 'develop something',
    date: '20. September 2017',
    time: '02:30:15',
    earned: 120,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientList,
      timeElapsed: 0,
      isRunning: false,
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  onDismiss(id) {
    const isNotId = (item) => item.id !== id;
    const updatedClientList = this.state.clientList.filter(isNotId);
    this.setState({
      clientList: updatedClientList
    })
  }

  getSeconds = () => (`0${this.state.timeElapsed % 60}`).slice(-2);
  getMinutes = () => (`0${Math.floor(this.state.timeElapsed / 60)}`).slice(-2);
  getHours = () => `0${Math.floor(this.state.timeElapsed / 600)}`;


   startTimer = () => {
    this.interval = setInterval(() => {
      this.setState({ 
        timeElapsed: this.state.timeElapsed + 1,
        isRunning: true
      })
     }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({
      isRunning: false
    })
  }

  reset = () => {
    clearInterval(this.interval);
    this.setState({
      timeElapsed: 0,
      isRunning: false
    })
  }

  render() {
    return (
      <div className="App">
        <Timer timer={this.state.timer}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          reset={this.reset}
          hours={this.getHours()}
          isRunning={this.state.isRunning}
          minutes={this.getMinutes()}
          seconds={this.getSeconds()}/>
        {this.state.clientList.map((item) => <div key={item.id}>
          {item.client}
          <Button
            onClick={() => this.onDismiss(item.id)}>
          </Button>
        </div>)}
        <Button
          onClick={this.reset}
          label="reset">
        </Button>
      </div>
    );
  }
}

export default App;
