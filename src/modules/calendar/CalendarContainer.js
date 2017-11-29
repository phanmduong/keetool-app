import React, {Component} from 'react';
import {
   Text, TouchableOpacity, View, FlatList, Image, Platform, ScrollView, StatusBar, RefreshControl,StyleSheet,TextInput
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import HamburgerButton from '../../commons/HamburgerButton';
import * as generalStyle from '../../styles/generalStyle';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import{connect} from 'react-redux';

 class CalendarContainer extends Component {
    constructor() {
        super();
        this.state = {
            calendarTypeView: true,
            items: {},
            markedDates : {},
        }
    }
     onDayPress = (day)=> {
         const markedDates = this.state.markedDates;
         const dateString = day.dateString

         if (markedDates.hasOwnProperty(dateString)) {
             delete markedDates[dateString]
         } else {
             markedDates[dateString] = { startingDay: true, color: '#70a3f4', endingDay: true,selected: true}
         }

         this.setState({markedDates});
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
                    <View  style={[general.wrapperFullWidth, {marginTop: 20}]}>
                        {
                            this.state.calendarTypeView
                                ?
                                <Calendar
                                    theme={generalStyle.themeCalendar}
                                />
                                :
                                <Agenda
                                    items={this.state.items}
                                    loadItemsForMonth={this.loadItems.bind(this)}
                                    selected={'2017-05-16'}
                                    renderItem={this.renderItem.bind(this)}
                                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                                    rowHasChanged={this.rowHasChanged.bind(this)}
                                />
                        }
                    </View>

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
                     this.state.items[strTime].push({
                         name: 'Nothing for ' + strTime,
                         height: 100,
                         key : strTime,
                     });
                 }
             }
             const newItems = {};
             Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
             this.setState({
                 items: newItems
             });
         }, 1000);
         // console.log(`Load Items for ${day.year}-${day.month}`);
     }
     updateDay(key ,message){
         const arr1 = Object.assign({}, this.state.items);
         arr1[key][0].name = message;
         this.setState({items : arr1});
     }

    renderItem(item) {
        return (
            <TextInput
                style={[styles.item, {height: item.height}]}
                multiline={false}
                onChangeText = {(message) => {this.updateDay(item.key, message)}}
                value= {item.name}
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