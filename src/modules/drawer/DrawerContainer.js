import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StatusBar, Switch
} from 'react-native';
import {
    Container, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import * as colors from '../../styles/generalStyle';
import * as changeThemeAction from '../home/changeThemeAction';
import {connect} from 'react-redux';
import Icon from '../../commons/Icon';
import general from '../../styles/generalStyle'
import {bindActionCreators} from 'redux';

class DrawerContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            setThemeDark: false
        }
    }

    changeTheme() {
        this.setState({setThemeDark : !this.state.setThemeDark})
        this.props.theme || this.state.setThemeDark
            ?
            this.props.changeThemeAction.changeThemeDark()
            :
            this.props.changeThemeAction.changeThemeLight()
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    barStyle={this.props.theme ? "dark-content" : "light-content"}
                />
                <LinearGradient
                    colors={colors.colors}
                    style={general.linearGradientInDrawer}>
                    <View style={[general.wrapperLogoInDrawer]}>
                        <Text style={[general.textTitleHeader]}>
                            KEETOOL
                        </Text>
                    </View>
                </LinearGradient>
                <Content style={general.padding}>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                    >
                        <Text style={general.textInDrawer}>Change Theme</Text>
                        <Switch
                            value={this.state.setThemeDark}
                            onValueChange={() => this.changeTheme()}
                            onTintColor={'#C86AD9'}
                        />
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
                    <TouchableOpacity
                    style={[general.itemTabInDrawer, general.paddingLeft]}
                    onPress={() => navigate('Map')}
                >
                    <Text style={general.textInDrawer}>Map</Text>
                </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('QRCode')}
                    >
                        <Text style={general.textInDrawer}>QRCODE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('Trello')}
                    >
                        <Text style={general.textInDrawer}>Jobs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('PersonnelManagement')}
                    >
                        <Text style={general.textInDrawer}>Personnel Management</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('Teach')}
                    >
                        <Text style={general.textInDrawer}>Teach</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('MarketingManagement')}
                    >
                        <Text style={general.textInDrawer}>Marketing Management</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('FinanceManagement')}
                    >
                        <Text style={general.textInDrawer}>Finance Management</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('Base')}
                    >
                        <Text style={general.textInDrawer}>Bases</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('ExerciseAndPost')}
                    >
                        <Text style={general.textInDrawer}>Exercise And Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('Email')}
                    >
                        <Text style={general.textInDrawer}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('SMS')}
                    >
                        <Text style={general.textInDrawer}>SMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer, general.paddingLeft]}
                        onPress={() => navigate('Event')}
                    >
                        <Text style={general.textInDrawer}>Events</Text>
                    </TouchableOpacity>
                </Content>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        theme: state.theme.theme,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeThemeAction: bindActionCreators(changeThemeAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)