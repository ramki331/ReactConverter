import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
    //we can omit the return statement here, this is a functional component
    //because it does not need to manage its own state
    props.persons.map((person, index) => {
        return (
          <Person
            key = {person.id}
            name = {person.name}
            age = {person.age}
            onclick = {() => props.clicked(index)}
            changed = {(event) => props.changed(event, index)}/>
        );
      })
);

export default persons;