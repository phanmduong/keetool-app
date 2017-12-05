import React, {Component} from 'react';
import {Animated, FlatList, Modal, PanResponder, StatusBar, Text, TouchableOpacity, View, Platform, Easing} from 'react-native';
import {Body, Container, Content, Input, Item, Label, Left, Right, Spinner} from 'native-base';
import {connect} from 'react-redux'
import general from '../../styles/generalStyle'
import Icon from '../../commons/Icon';

class DragAndDropContainer extends Component {
    constructor() {
        super()
        this._active = new Animated.Value(0);

        this._style = {
            ...Platform.select({
                ios: {
                    transform: [{
                        scale: this._active.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.1],
                        }),
                    }],
                    shadowRadius: this._active.interpolate({
                        inputRange: [0, 1],
                        outputRange: [2, 10],
                    }),
                },

                android: {
                    transform: [{
                        scale: this._active.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.07],
                        }),
                    }],
                    elevation: this._active.interpolate({
                        inputRange: [0, 1],
                        outputRange: [2, 6],
                    }),
                },
            })
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            Animated.timing(this._active, {
                duration: 300,
                easing: Easing.bounce,
                toValue: Number(nextProps.active),
            }).start();
        }
    }

    render (){
         const {item, active} = this.props;
        return (
        <Animated.View
            style={[general.wrapperCenter, this._style]}>
            <Animated.View
                style={[general.itemInCardTrello, general.shadow,
                    general.marginTop]}>
                <View style={general.wrapperRowSpaceBetween}>
                    <Text>{item}</Text>
                    <Icon name="fontawesome|pencil"
                          size={15}
                          style={general.iconGray}
                    />
                </View>
                <View style={[general.wrapperDeadlineJobAssignment, general.marginTopBottom]}>
                    <View style={[general.deadlineProgressJobAssignment]}/>
                </View>
            </Animated.View>
        </Animated.View>
        )
    }
}
function mapStateToProps(state){
    return {
    }
}
export default connect(mapStateToProps)(DragAndDropContainer)

