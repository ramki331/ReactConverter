import React from 'react';

const ConvertValue = (props) => {
    return (
        <div className={props.classes}>
            <input 
                type="text" 
                onChange={props.convert} 
                value={props.value}/><br/>
            {props.measurement}
        </div>
    );
}

export default ConvertValue;