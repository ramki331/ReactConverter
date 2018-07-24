import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('Person.js -> in constructor', props)
      }
    
      componentWillMount() {
        console.log('Person.js -> in componentWillMount')
      }
    
      componentDidMount() {
        console.log('Person.js -> in componentDidMount')
      }

    render() {
        console.log('Person.js -> in render')

    return (
        <Aux>
            <p onClick = {this.props.onclick}> I am {this.props.name}, my age: {this.props.age}</p>
            <p> {this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux>
        // [
        //     <p onClick = {this.props.onclick}> I am {this.props.name}, my age: {this.props.age}</p>,
        //     <p> {this.props.children}</p>,
        //     <input type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
    );
}
};

export default withClass(Person, classes.Person);