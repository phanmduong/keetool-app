import { AppRegistry, Alert } from 'react-native';
import React, { Component } from 'react';
import App from './src/App';

export default class keetool extends Component {
    render(){
        return(
            <App/>
        )
    }
}

console.disableYellowBox = true;
console.disableRedBox = true;

AppRegistry.registerComponent('keetool', () => keetool);


