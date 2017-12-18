import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import HomeContainer from '../modules/home/HomeContainer';
import DrawerContainer from '../modules/drawer/DrawerContainer';
import MusicPlayContainer from '../modules/musicPlay/MusicPlayContainer';
import VideoPlayContainer from '../modules/videoPlay/VideoPlayContainer';
import BookStoreContainer from '../modules/bookStore/BookStoreContainer';
import CalendarContainer from '../modules/calendar/CalendarContainer';
import DashboardContainer from '../modules/dashboard/DashboardContainer';
import PersonnelManagementContainer from '../modules/personnelManagement/PersonnelManagementContainer';
import TeachContainer from '../modules/teach/TeachContainer';
import MarketingManagementContainer from '../modules/marketingManagement/MarketingManagementContainer';
import FinanceManagementContainer from '../modules/financeManagement/FinanceManagementContainer';
import ExerciseAndPostContainer from '../modules/exerciseAndPost/ExerciseAndPostContainer';
import EmailContainer from '../modules/email/EmailContainer';
import ContactContainer from '../modules/contact/ContactContainer';
import EventContainer from '../modules/event/EventContainer';
import BaseContainer from '../modules/base/BaseContainer';
import * as size from '../styles/size';
import MapContainer from "../modules/maps/MapContainer";
import QRcodeContainer from "../modules/QRcode/QRcodeContainer";
import TrelloContainer from '../modules/trello/TrelloContainer';
import RegisterContainer from '../modules/register/RegisterContainer';
import CartContainer from '../modules/cart/CartContainer'
const StackNavigatorStyle = {
    navigationOptions: {
        header: null,
    },
};

const HomeStackNavigator = StackNavigator({
    HomeContainer: {screen: HomeContainer},

}, StackNavigatorStyle);


const Drawer = DrawerNavigator(
    {
        Home: {screen: HomeStackNavigator},
        MusicPlay: {screen: MusicPlayContainer},
        VideoPlay: {screen: VideoPlayContainer},
        BookStore: {screen: BookStoreContainer},
        Calendar: {screen: CalendarContainer},
        Dashboard: {screen: DashboardContainer},
        Map : {screen : MapContainer},
        QRCode : {screen : QRcodeContainer},
        Trello : {screen : TrelloContainer},
        PersonnelManagement : {screen : PersonnelManagementContainer},
        Teach : {screen : TeachContainer},
        MarketingManagement : {screen : MarketingManagementContainer},
        FinanceManagement : {screen : FinanceManagementContainer},
        ExerciseAndPost : {screen : ExerciseAndPostContainer},
        Base : {screen : BaseContainer},
        Email : {screen : EmailContainer},
        Contact : {screen : ContactContainer},
        Event : {screen : EventContainer},
        Cart : {screen : CartContainer},
        Register : {screen : RegisterContainer}
    },
    {
        drawerWidth: size.wid * 3 / 4,
        drawerPosition: 'right',
        contentComponent: props => <DrawerContainer {...props} />,
    }
);
export const Main = StackNavigator(
    {
        Drawer: {screen: Drawer},
    },
    {headerMode: 'none'}
);
