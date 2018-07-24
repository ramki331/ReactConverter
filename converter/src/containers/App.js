import React, { Component } from 'react';
import './App.css';
import DisplayConverter from '../components/DisplayConverter/Converter'

class App extends Component {
  render() {
    return (
      <div className="Converter">
        <h1>Converter</h1>
        <DisplayConverter />
      </div>
    );
  }
}

export default App;
