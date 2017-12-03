import React, {Component} from 'react';
import {Animated, FlatList, Modal, PanResponder, StatusBar, Text, View, TouchableHighlight} from 'react-native';
import {Body, Container, Content, Input, Item, Label, Left, Right, Spinner} from 'native-base';
import {connect} from 'react-redux'
import general from '../../styles/generalStyle'

class DragAndDropContainer extends Component {
    constructor() {
        super()
        }




    render (){
        // const {general} = this.props;
        return (
            <TouchableHighlight
                style={general.wrapperCenter}
                {...this.props.sortHandlers}
            >
                <View
                    style={[general.itemInCardTrello, general.shadow,
                        // panStyle,
                        general.marginTop]}>
                    <Text>{this.props.item}</Text>
                    <View style={[general.deadlineProgressJobAssignment,  general.marginTop]}/>
                </View>
            </TouchableHighlight>
        )
    }
}
function mapStateToProps(state){
    return {
        general : state.theme.general
    }
}
export default connect(mapStateToProps)(DragAndDropContainer)
