import React from 'react';
import ConvertValue from '../ConvertValue/ConvertValue';
import classes from './ConvertLogic.css';

const ConvertLogic = (props) => {
    return (
        <div className={classes.Convert}>
            <ConvertValue 
                classes={classes.from} 
                convert={props.toCelsius} 
                measurement="Fahrenheit"
                value={props.fromValue}/>
            <div className={classes.Seperator}>=</div>
            <ConvertValue 
                classes={classes.to} 
                measurement="Celsius" 
                convert={props.toFahrenheit}
                value={props.toValue}/>
        </div>
    );
}

export default ConvertLogic;