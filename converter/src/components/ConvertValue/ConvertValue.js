import React from 'react';

const ConvertValue = (props) => {
    return (
        <div style={{display:'inline-block'}} className={props.classes}>
            <input type="text" /><br/>
            {props.measurement}
        </div>
    );
}

export default ConvertValue;