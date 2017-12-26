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
        this.state = {
            showDraggable: true,
            dropZoneValues: null,
            pan: new Animated.ValueXY()
        }
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder    : () => true,
            onPanResponderMove              : Animated.event([null,{
                dx  : this.state.pan.x,
                dy  : this.state.pan.y
            }]),
            onPanResponderRelease           : (e, gesture) => {
                if(this.isDropZone(gesture)){
                    this.setState({
                        showDraggable : false
                    });
                }else{
                    Animated.spring(
                        this.state.pan,
                        {toValue:{x:0,y:0}}
                    ).start();
                }
            }
        });
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
    isDropZone(gesture){
        var dz = this.state.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }
    // setDropZoneValues(event){
    //     this.setState({
    //         dropZoneValues : event.nativeEvent.layout
    //     });
    // }
    render (){
         const {item, active, indexItem, index} = this.props;

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
                          onPress = {() => this.props.openModalEditItem(item, indexItem, index)}
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

