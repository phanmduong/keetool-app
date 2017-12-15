import { AppRegistry, Alert } from 'react-native';
import React, { Component } from 'react';
import App from './src/App';
import OneSignal from 'react-native-onesignal';

export default class keetool extends Component {
    render(){
        return(
            <App/>
        )
    }
}

console.disableYellowBox = true;
AppRegistry.registerComponent('keetool', () => keetool);


