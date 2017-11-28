import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, Platform, ScrollView, StatusBar, RefreshControl,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import HamburgerButton from '../../commons/HamburgerButton';
import * as colors from '../../styles/generalStyle';
import { Calendar } from 'react-native-calendars';
import {connect} from 'react-redux';
 class CalendarContainer extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {general} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    barStyle={"light-content"}
                />
                <LinearGradient
                    colors={colors.colors}
                    style={general.linearGradient}>
                    <View style={general.wrapperHeader}>
                        <Text style={[general.textTitleHeader]}>
                            CALENDAR
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperRowSpaceBetween}>
                        <Icon
                            name="fontawesome|bell-o"
                            size={20}
                            style={general.iconStyle}
                        />
                        <Icon
                            name="fontawesome|calendar"
                            size={20}
                            style={general.iconStyle}
                        />
                    </View>
                    <Calendar
                        theme={colors.themeCalendar}
                    />
                </LinearGradient>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        general : state.theme.general
    }
}
export default connect(mapStateToProps)(CalendarContainer)