import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';

export default class BaseContainer extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <View>
                <Text>I'm CONG</Text>
            </View>
        );
    }
}