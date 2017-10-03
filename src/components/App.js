import React, { Component } from "react";
import { Button } from "./button/button";
import Timer from "./Timer/Timer";
import ClientList from "./clientList/clientList";
import "./App.scss";

const clients = [
  {
    id: 0,
    client: "Aurelo"
  },
  {
    id: 1,
    client: "Nikdin"
  },
  {
    id: 2,
    client: "WakeSys"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients,
      timeElapsed: 0,
      isRunning: false,
      currentClient: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.id !== id;
    const updatedClientList = this.state.clientList.filter(isNotId);
    this.setState({
      clientList: updatedClientList
    });
  }

  getSeconds = () => `0${this.state.timeElapsed % 60}`.slice(-2);
  getMinutes = () => `0${Math.floor(this.state.timeElapsed / 60)}`.slice(-2);
  getHours = () => `0${Math.floor(this.state.timeElapsed / 600)}`;

  handleChange(event) {
    this.setState({
      currentClient: event.target.value
    });
    console.log('event', event.target.value);
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: this.state.timeElapsed + 1,
        isRunning: true
      });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({
      isRunning: false
    });
  };

  reset = () => {
    clearInterval(this.interval);
    this.setState({
      timeElapsed: 0,
      isRunning: false
    });
  };

  render() {
    return (
      <div className="App">
        <Timer
          timer={this.state.timer}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          reset={this.reset}
          hours={this.getHours()}
          isRunning={this.state.isRunning}
          minutes={this.getMinutes()}
          seconds={this.getSeconds()}
        />
        <ClientList
          currentClient={this.state.currentClient}
          clients={this.state.clients}
          handleChange={this.handleChange}/>
        <Button onClick={this.reset} label="reset" />
      </div>
    );
  }
}

export default App;


