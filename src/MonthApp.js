import React, { Component } from 'react';
import './MonthApp.css';
import Header from './components/Header'; 
import Month from './components/Month';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Month />
      </div>
    );
  }
}

export default App;
