import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity,
} from 'react-native';
import {
    Container,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import general from '../../styles/generalStyle';
import * as colors from '../../styles/generalStyle';

export default class DrawerContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    changeTheme(){

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <LinearGradient
                    colors={colors.colors}
                    style={general.linearGradientInDrawer}>
                    <View style={[general.wrapperLogoInDrawer]}>
                        <Text style={[general.textTitleHeader]}>
                            KEETOOL
                        </Text>
                    </View>
                </LinearGradient>
                <View style={general.padding}>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => this.changeTheme()}
                    >
                        <Text style={general.textInDrawer}>Change Theme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('Home')}
                    >
                        <Text style={general.textInDrawer}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('MusicPlay')}
                    >
                        <Text style={general.textInDrawer}>Music Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('VideoPlay')}
                    >
                        <Text style={general.textInDrawer}>Video Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('BookStore')}
                    >
                        <Text style={general.textInDrawer}>Book Store</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('Calendar')}
                    >
                        <Text style={general.textInDrawer}>Calendar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('Dashboard')}
                    >
                        <Text style={general.textInDrawer}>Dashboard</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}