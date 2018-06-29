import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: "RamaKrishna", age: 32},
      {id: 2, name: "Srikanth", age: 29},
      {id: 3, name: "Varun Sai", age: 3}
    ],
    showPersons: false
  }

  // changedNameHandler = (event, id) => {
  //   console.log("in change handler");
  //   const personIndex = this.state.persons.findIndex(val => {
  //     return id === val.id;
  //   });

  //   const person = {...this.state.persons[personIndex]};
  //   person.name = event.target.value;

  //   const persons = [...this.state.persons];
  //   persons[personIndex] = person;

  //   this.setState({
  //     persons: persons
  //   })
  // }

  changedNameHandler = (event, index) => {
    const persons = [...this.state.persons];
    const person = persons[index];
    person.name = event.target.value;
    persons[index] = person;

    this.setState({persons: persons});
  }


  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons : !this.state.showPersons
    })
  }

  render() {

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked={this.deletePersonHandler}
            changed = {this.changedNameHandler}/>
      </div> 
      );
    }

    return (
      // React.createElement('div', {className: 'App'}, React.createElement(
      //   'h1', null, 'Hi, I am a react App'
      // ))
        <div className={classes.App}>
          <Cockpit 
            showPersons = {this.showPersons}
            persons = {this.state.persons}
            toggle={this.togglePersonHandler}/>
          {persons}
        </div>
    );
  }
}

export default App; // higher order component
