import React, { Component } from 'react';
import {Button} from './button/button'
import logo from '../logo.svg';
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
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = (item) => item.id !== id;
    const updatedClientList = this.state.clientList.filter(isNotId);
    this.setState({
      clientList: updatedClientList
    })
  }

  render() {

    const hello = 'Welcome to the react universe';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{hello}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { this.state.clientList.map((item) => <div key={item.id}>
          {item.client}
          <button
            onClick={() => this.onDismiss(item.id)}
            type="button">
            Dismiss
          </button>
        </div>)}
      </div>
    );
  }
}

export default App;
