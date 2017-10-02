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

const timer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientList,
      timer,
      timeElapsed: 0,
    };
    console.log('huhu', this.state.timer.hours);
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
    setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 })
     }, 1000);
  }

  stopTimer = () => {
  }

  render() {
    return (
      <div className="App">
        <Timer timer={this.state.timer}
          startTimer={this.startTimer}/>
        { this.state.clientList.map((item) => <div key={item.id}>
          {item.client}
          <Button
            onClick={() => this.onDismiss(item.id)}>
          </Button>
        </div>)}
        {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        <Button
          onClick={() => this.startTimer()}>
        </Button>
        <Button
          onClick={() => this.stopTimer()}
          label="stop">
        </Button>
      </div>
    );
  }
}

export default App;
