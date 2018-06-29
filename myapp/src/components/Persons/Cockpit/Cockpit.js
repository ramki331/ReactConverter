import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
        <h1>Hi, I am a react App</h1>
        <p className={assignedClasses.join(' ')}> This is really working</p>

        <button 
          className={btnClass}  
          onClick={props.toggle}>Toggle Persons</button>
          </div>
    );
}

export default cockpit;