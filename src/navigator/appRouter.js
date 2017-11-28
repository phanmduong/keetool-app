import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import HomeContainer from '../modules/home/HomeContainer';
import DrawerContainer from '../modules/drawer/DrawerContainer';
import MusicPlayContainer from '../modules/musicPlay/MusicPlayContainer';
import VideoPlayContainer from '../modules/videoPlay/VideoPlayContainer';
import BookStoreContainer from '../modules/bookStore/BookStoreContainer';
import CalendarContainer from '../modules/calendar/CalendarContainer';
import DashboardContainer from '../modules/dashboard/DashboardContainer';
import * as size from '../styles/size';

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
    },
    {
        drawerWidth: size.wid * 3 / 4,
        drawerPosition: 'right',
        contentComponent: props => <DrawerContainer {...props} />
    }
);
export const Main = StackNavigator(
    {
        Drawer: {screen: Drawer},
    },
    {headerMode: 'none'}
);
