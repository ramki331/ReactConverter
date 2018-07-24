import React, {Component} from 'react';
import DisplayUnit from '../DisplayUnit/DisplayUnit'
import Convert from '../ConvertLogic/ConvertLogic'

class DisplayConverter extends Component {
    render() {
        return (
            <div className="display">
                <DisplayUnit classes="unit"/>
                <Convert clases="convert"/>
            </div>
        );
    }
}

export default DisplayConverter;