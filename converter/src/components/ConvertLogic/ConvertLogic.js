import React from 'react';
import ConvertValue from '../ConvertValue/ConvertValue'

const ConvertLogic = (props) => {
    return (
        <div className={props.classes} style={{padding:'15px'}}>
            <ConvertValue classes="from" measurement="Fahrenheit"/>
            <div style={{ display: 'inline-block', verticalAlign: 'top', padding: '2px', marginLeft: '6px', marginRight: '6px', width: '10px' }}>=</div>
            <ConvertValue classes="from" measurement="Celsius"/>
        </div>
    );
}

export default ConvertLogic;