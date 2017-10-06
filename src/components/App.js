import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import ListView from '../views/ListView/ListView';
import TimerView from '../views/TimerView/TimerView';

import styles from './App.scss';

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

const projects = [
  {
    id: 0,
    client: 'Nikdin',
    timeElapsed: 230,
    earned: 100,
    projectDescription: 'i did something...'
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients,
      timeElapsed: 0,
      isRunning: false,
      currentClient: '',
      projectDescription: ''
    };

    this.handleProjectDescription = this.handleProjectDescription.bind(this);
    this.handleClientChange = this.handleClientChange.bind(this);
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

  handleClientChange(event) {
    this.setState({
      currentClient: event.target.value
    });
    console.log('event', event.target.value);
  }

  handleProjectDescription(event) {
    this.setState({
      projectDescription: event.target.value
    })
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
      <div className={styles.App}>
        <BrowserRouter>
          <div className={styles.background}>
            <Route exact path="/" render={(state) => ( 
              <TimerView 
                timer={this.state.timer}
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                reset={this.reset}
                hours={this.getHours()}
                isRunning={this.state.isRunning}
                minutes={this.getMinutes()}
                seconds={this.getSeconds()}
                clients={this.state.clients}
                currentClient={this.state.currentClient}
                handleClientChange={this.handleClientChange}
                handleProjectDescription={this.handleProjectDescription}/> 
              )} />
            <Route path="/ListView" component={ListView} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


