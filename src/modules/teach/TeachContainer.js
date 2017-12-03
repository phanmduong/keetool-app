import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, Platform, Animated, StatusBar, RefreshControl,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux'

class TeachContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
        }
    }

    ViewScheduleClass() {
        this.setState({tab: 0})
    }

    ViewStudyLesson() {
        this.setState({tab: 1})
    }

    ViewRegisterList() {
        this.setState({tab: 2})
    }

    ViewGens() {
        this.setState({tab: 3})
    }

    ViewCourses() {
        this.setState({tab: 4})
    }

    ViewClasses() {
        this.setState({tab: 5})
    }

    ViewAttendance() {
        this.setState({tab: 6})
    }

    ViewPersonalRating() {
        this.setState({tab: 7})
    }

    ViewWaitList() {
        this.setState({tab: 8})
    }

    ShowTab() {
        const {general, colors} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );
            case 1:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );

            case 2:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );

            case 3:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );

            case 4:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );

            case 5:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );

            case 6:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );

            case 7:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );

            case 8:
                return (
                    <Content style={{flex: 1, padding: 20}}>

                    </Content>
                );

        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {colors} = this.props;

        return (
            <Container style={general.wrapperContainer}>
                <LinearGradient
                    colors={colors}
                    style={general.linearGradient}>
                    <View style={general.wrapperHeader}>
                        <Text style={[general.textTitleHeader]}>
                            TEACH
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <Content horizontal={true}
                                 showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => this.ViewScheduleClass()}
                                              style={{height: 30}}>
                                <View style={
                                    this.state.tab === 0
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>Schedule
                                        Class</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.ViewStudyLesson()}>
                                <View style={
                                    this.state.tab === 1
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>Study
                                        Session</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewRegisterList()}>
                                <View style={
                                    this.state.tab === 2
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>Register
                                        List</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewGens()}>
                                <View style={
                                    this.state.tab === 3
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 3 ? general.textIstActive : general.textNotActive}>Gens</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewCourses()}>
                                <View style={
                                    this.state.tab === 4
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 4 ? general.textIstActive : general.textNotActive}>Courses</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewClasses()}>
                                <View style={
                                    this.state.tab === 5
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 5 ? general.textIstActive : general.textNotActive}>Classes</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewAttendance()}>
                                <View style={
                                    this.state.tab === 6
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 6 ? general.textIstActive : general.textNotActive}>Attendance</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewPersonalRating()}>
                                <View style={
                                    this.state.tab === 7
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 7 ? general.textIstActive : general.textNotActive}>Rating</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewWaitList()}>
                                <View style={
                                    this.state.tab === 8
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 8 ? general.textIstActive : general.textNotActive}>Wait
                                        List</Text>

                                </View>
                            </TouchableOpacity>
                        </Content>
                    </View>

                    <View style={general.wrapperFullWidth}>
                        {this.ShowTab()}
                    </View>
                </LinearGradient>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        general: state.theme.general,
        colors: state.theme.colors
    }
}

export default connect(mapStateToProps)(TeachContainer);