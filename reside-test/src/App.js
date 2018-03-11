import React, { Component } from 'react';
import './App.css';
import Properties from './Properties';
import base from './base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openhouses: {}
    };
    this.loadHomes = this.loadHomes.bind(this);
  }

  componentDidMount() {
    this.ref = base.syncState('residetestrachelmoore', 
  {
    context: this, 
    state: 'openhouses'
  });
  }

  // componentWillMount() {
  //   this.ref = base.syncState('openhouses',
  //   {
  //     context: this, 
  //     state: 'openhouses'
  //   });
  // }

  loadHomes() {
    fetch('https://api.simplyrets.com/openhouses', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('simplyrets:simplyrets')
      }
    })
      .then(response => {
        return response.json();
      })
      .then(jsonProperties => {
        console.log('OPEN HOUSES:', jsonProperties);
        this.setState({ openhouses: jsonProperties, listings: jsonProperties[0].listing });
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.loadHomes}>Load Homes!</button>
        <ul className="list-of-homes">
          {
            Object.keys(this.state.openhouses)
              .map(key => <Properties key={key} index={key} details={this.state.openhouses[key]} />)
          }
        </ul>
      </div>
    );
  }
}

export default App;
