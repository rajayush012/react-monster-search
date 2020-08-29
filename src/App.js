import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { thisTypeAnnotation } from '@babel/types';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [
        {
          name : 'Zombie',
          id : 1
        },
        {
          name : 'Frankestein',
          id : 2
        },
        {
          name : 'Dracula',
          id : 3
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {this.state.monsters.map(monster => <h1 key={monster.id}>{ monster.name } </h1>)}
      </div>
    );
  }
}

export default App;
