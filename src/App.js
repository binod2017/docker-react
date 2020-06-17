import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React JS June 16 2020</h1>
        </header>
        <p className="App-intro">
            I am changed
        </p>      
      </div>
    );
  }
}

export default App;
