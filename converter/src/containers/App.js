import React, { Component } from 'react';
import classes from './App.css';
import Converter from '../components/DisplayConverter/Converter'

class App extends Component {
  render() {
    return (
      <Converter classes={classes.Converter}/>
    );
  }
}

export default App;
