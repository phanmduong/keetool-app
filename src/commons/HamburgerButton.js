import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';
import general from '../styles/generalStyle';

class HamburgerButton extends Component{
    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.navigate('DrawerOpen')}>
                <Icon
                    name="materialCommunity|menu"
                    size={30}
                    style={[general.iconStyle, {marginRight: -3}]}
                />
            </TouchableOpacity>
        );
    }
}

export default HamburgerButton;