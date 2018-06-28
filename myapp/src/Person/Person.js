import React from 'react';
import './Person.css';

const person = (props) => {

    //media queries
    // const style = {
    //     '@media (min-width:500px)' : {
    //         width: '450px'
    //     }
    // }

    return (
        <div className="Person">
            <p onClick = {props.onclick}> I am {props.name}, my age: {props.age}</p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;