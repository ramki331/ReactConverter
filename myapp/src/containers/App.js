import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App.js -> in constructor', props)
  }

  componentWillMount() {
    console.log('App.js -> in componentWillMount')
  }

  componentDidMount() {
    console.log('App.js -> in componentDidMount')
  }

  // shouldComponentUpdate(nextprops, nextstate) {
  //   console.log('App.js -> in shouldComponentUpdate', nextprops, nextstate)
  //   return nextstate.persons !== this.state.persons ||
  //     nextstate.showPersons !== this.state.showPersons
  //   //return true;
  // }

  componentWillUpdate(nextprops, nextstate) {
    console.log('App.js -> in componentWillUpdate', nextprops, nextstate)
  }

  componentDidUpdate() {
    console.log('App.js -> in componentDidUpdate')
  }

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
    console.log('App.js -> in render')
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
        //<WithClass classes={classes.App}>
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            appTitle = {this.props.title}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            toggle={this.togglePersonHandler}/>
          {persons}
          </Aux>
        // </WithClass>
    );
  }
}

export default withClass(App, classes.App); // higher order component
