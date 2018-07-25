import React, {Component} from 'react';
import DisplayUnit from '../DisplayUnit/DisplayUnit'
import Convert from '../ConvertLogic/ConvertLogic'
import classes from './Converter.css'

class DisplayConverter extends Component {

    state = {
        "fromValue": 32,
        "toValue": 0,
        "unitName": "",
        "unit": {
            "from":"",
            "to":"",
        }
    }

    convertValueToCelsiusFromFahrenheit = (event) => {
        const fahrenheit = event.target.value;
        const celsius = Math.round((fahrenheit-32)*(5/9))
        this.setState(
            {
                fromValue: fahrenheit,
                toValue: celsius
            }
        )
    }

    convertValueToFahrenheitFromCelsius = (event) => {
        const celsius = event.target.value
        const fahrenheit = (9*celsius/5)+32
        this.setState({
            fromValue: fahrenheit,
            toValue: celsius
        })
    }

    render() {
        return (
            <div className={classes.Display}>
                <DisplayUnit />
                <Convert 
                    toCelsius={this.convertValueToCelsiusFromFahrenheit} 
                    toFahrenheit={this.convertValueToFahrenheitFromCelsius}
                    fromValue={this.state.fromValue}
                    toValue={this.state.toValue}/>
            </div>
        );
    }
}

export default DisplayConverter;