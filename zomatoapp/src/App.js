import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchFood from './components/SearchFood'
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
          <h1>Welcome To ZooFoods</h1>
          <SearchFood></SearchFood>
          <List></List>
      </div>
    );
  }
}

export default App;
