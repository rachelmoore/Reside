import React, { Component } from 'react';
import './App.css';
import Properties from './Properties';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Properties />
        <Properties />
      </div>
    );
  }
}

export default App;
