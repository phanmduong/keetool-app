import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, StyleSheet, TextInput, StatusBar, KeyboardAvoidingView
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import HamburgerButton from '../../commons/HamburgerButton';
import {connect} from 'react-redux';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

class CalendarContainer extends Component {
    constructor() {
        super();
        this.state = {
            calendarTypeView: true,
            items: {}
        }
    }

    changeCalendarTypeView() {
        let temp = !this.state.calendarTypeView;
        this.setState({calendarTypeView: temp})
    }


    render() {
        const {navigate} = this.props.navigation;
        const {general, colors} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    barStyle={"light-content"}
                />
                <LinearGradient
                    colors={colors}
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
                        <View style={general.wrapperRowCenter}>
                            <Text style={general.textTitleCard}>Notification</Text>
                            <View style={[general.wrapperNotificationCircle, {marginLeft: 3}]}>
                                <Text style={general.textNotification}>1</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.changeCalendarTypeView()}
                        >
                            <Icon
                                name="fontawesome|calendar"
                                size={20}
                                style={general.iconStyle}
                            />
                        </TouchableOpacity>

                    </View>
                    {
                        this.state.calendarTypeView
                            ?
                            <Calendar
                                theme={colors.themeCalendar}
                            />
                            :
                            <Agenda
                                style={[general.wrapperFullWidth, {marginTop: 20}]}
                                items={this.state.items}
                                loadItemsForMonth={this.loadItems.bind(this)}
                                selected={'2017-11-28'}
                                renderItem={this.renderItem.bind(this)}
                                renderEmptyDate={this.renderEmptyDate.bind(this)}
                                rowHasChanged={this.rowHasChanged.bind(this)}
                            />
                    }
                </LinearGradient>
            </Container>
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {
                newItems[key] = this.state.items[key];
            });
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }


    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {
                newItems[key] = this.state.items[key];
            });
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <TextInput
                style={[styles.item, {height: item.height}]}
                placeholder={item.name}
                multiline={false}

            />
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text></Text></View>
        );
    }

    rowHasChanged() {
        return true;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});

function mapStateToProps(state) {
    return {
        general : state.theme.general,
        colors: state.theme.colors
    }
}
export default connect(mapStateToProps)(CalendarContainer)