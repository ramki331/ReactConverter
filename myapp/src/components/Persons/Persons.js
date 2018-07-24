import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log('Persons.js -> in constructor', props)
  }

  componentWillMount() {
    console.log('Persons.js -> in componentWillMount')
  }

  componentDidMount() {
    console.log('Persons.js -> in componentDidMount')
  }
  
  componentWillReceiveProps(nextprops) {
    console.log('Person.js -> in componentWillReceiveProps',nextprops)
  }

  // shouldComponentUpdate(nextprops, nextstate) {
  //   console.log('Person.js -> in shouldComponentUpdate', nextprops, nextstate)
  //   return nextprops.persons !== this.props.persons
  //   //return true;
  // }

  componentWillUpdate(nextprops, nextstate) {
    console.log('Person.js -> in componentWillUpdate', nextprops, nextstate)
  }

  componentDidUpdate() {
    console.log('Person.js -> in componentDidUpdate')
  }

  render() {
    console.log('Persons.js -> in render')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key = {person.id}
          name = {person.name}
          age = {person.age}
          onclick = {() => this.props.clicked(index)}
          changed = {(event) => this.props.changed(event, index)}/>
      );
    })
  }
}

export default Persons;