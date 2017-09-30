import React, { Component } from 'react';
import {Button} from './button/button'
import logo from '../logo.svg';
import './App.scss';

class App extends Component {
  render() {

    const hello = 'Welcome to the react universe';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{hello}</h1>
        </header>
        <Button
            label="Wurzelpeter"
            type="submit" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
