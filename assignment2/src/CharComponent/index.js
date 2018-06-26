import React from 'react';
import "./CharComponent.css";

const CharComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.click}>
            {props.value}
        </div>
    )
}

export default CharComponent;