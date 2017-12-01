import React, {Component} from 'react';
import {Animated, FlatList, Modal, PanResponder, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Input, Item, Label, Left, Right, Spinner} from 'native-base';
import {connect} from 'react-redux'
import general from '../../styles/generalStyle'

class DragAndDropContainer extends Component {
    constructor() {
        super()
        this.state = {
            pan: new Animated.ValueXY()
        }
    }

    componentWillMount() {
        this._val = {x: 0, y: 0};
        this.state.pan.addListener((value) => this._val = value);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x, dy: this.state.pan.y},
                this.state.pan.setValue({x: 0, y: 0})
            ]),
        })
    }
    render (){
        // const {general} = this.props;
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return (
        <Animated.View
            {...this.panResponder.panHandlers}
            style={general.wrapperCenter}>
            <Animated.View
                {...this.panResponder.panHandlers}
                style={[general.itemInCardTrello, general.shadow,
                    // panStyle,
                    general.marginTop]}>
                <Text>{this.props.item}</Text>
                <View style={[general.deadlineProgressJobAssignment,  general.marginTop]}/>
            </Animated.View>
        </Animated.View>
        )
    }
}
function mapStateToProps(state){
    return {
        general : state.theme.general
    }
}
export default connect(mapStateToProps)(DragAndDropContainer)

