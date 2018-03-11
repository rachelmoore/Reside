import React, { Component } from 'react';
import './App.css';
import Properties from './Properties';
import Header from './Header';
import base from './base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openhouses: {}
    };
    this.loadHomes = this.loadHomes.bind(this);
    this.generateRandNum = this.generateRandNum.bind(this);
  }

  componentDidMount() {
  this.loadHomes();
  this.generateRandNum();

    this.ref = base.syncState('openhouses', 
  {
    context: this, 
    state: 'openhouses'
  });
  }

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

  generateRandNum() {
    let randNum = localStorage.getItem('randomNumber');
    if (randNum === null) {
      randNum = Math.floor(Math.random() * 999999);
      localStorage.setItem('randomNumber', randNum);
    }
    console.log(randNum);
  }


  render() {
    return (
      <div className="App">
        <Header />

        <p>Welcome! Your User Id is: {localStorage.getItem('randomNumber')}</p>
        
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
