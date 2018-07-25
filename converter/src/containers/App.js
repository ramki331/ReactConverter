import React, { Component } from 'react';
import classes from './App.css';
import DisplayConverter from '../components/DisplayConverter/Converter'

class App extends Component {
  render() {
    return (
      <div className={classes.Converter}>
        <h1>Converter</h1>
        <DisplayConverter class={classes.Converter}/>
      </div>
    );
  }
}

export default App;
