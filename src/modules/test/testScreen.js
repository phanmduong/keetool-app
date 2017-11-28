import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import * as testAction from './testAction';
import {bindActionCreators} from 'redux';

class Test extends Component{
    constructor(){
        super();
        this.state = {
            themeDark: true,
            color: 'red',
            theme: [
                {
                    themeDark: {
                        color: '#F52354'
                    },
                },
                {
                    themeLight: {
                        color: '#A89786'
                    },
                }
            ],
        }
    }

    componentWillMount(){

    }

    changeColor(){
        this.setState({color: 'blue'})
    }

    render(){
        return(
            <View>
                <View style={{width: 300, height: 300, backgroundColor: this.state.color}}/>

                <TouchableOpacity
                    onPress={() => this.changeColor()}
                >
                    <Text>Change Color</Text>
                </TouchableOpacity>
            </View>
        );

    }
}

function mapStateToProps(state) {
    return {
        themeColor: state.test.themeColor,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        testAction: bindActionCreators(testAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
