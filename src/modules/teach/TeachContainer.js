import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, PanResponder, Modal, Switch, RefreshControl,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import Icon from '../../commons/Icon';
import {connect} from 'react-redux'
import general from '../../styles/generalStyle';
import {Col, Row, Grid} from "react-native-easy-grid";

class TeachContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            modal: false,
            register: {
                name: '',
                course_avatar_url: '',
                email: '',
                phone: '',
                created_at: '',
                call_status: '',
                saler: {
                    name: '',
                    color: '',
                },
                campaign: {
                    name: '',
                    color: '',
                },
            }
        }
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({
                modal: false,
            });
        }
    }

    setModal(visible, item) {
        if (item.saler && item.campaign) {
            this.setState({
                modal: visible,
                register: {
                    name: item.name,
                    course_avatar_url: item.course_avatar_url,
                    email: item.email,
                    phone: item.phone,
                    call_status: item.call_status,
                    created_at: item.created_at,
                    saler: {
                        name: item.saler.name,
                        color: item.saler.color,
                    },
                    campaign: {
                        name: item.campaign.name,
                        color: item.campaign.color,
                    },
                }
            })
        } else {
            this.setState({
                modal: visible,
                register: {
                    name: item.name,
                    course_avatar_url: item.course_avatar_url,
                    email: item.email,
                    phone: item.phone,
                    call_status: item.call_status,
                    created_at: item.created_at,
                }
            });
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
        const {schedules, study_sessions, registers, gens, courses} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <View style={{flex: 1, padding: 20}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={schedules}
                            renderItem={({item}) =>
                                <TouchableOpacity
                                    style={[general.wrapperRowCenter, general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                    <Text style={general.textDescriptionCard}>{item.name}</Text>
                                </TouchableOpacity>
                            }
                        />
                        <View style={general.wrapperBottomModule}/>
                    </View>
                );
            case 1:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <View>
                            <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                <Col>
                                    <Text style={general.textTitleCard}>Weekday</Text>
                                </Col>
                                <Col>
                                    <Text style={general.textTitleCard}>Start Time</Text>
                                </Col>
                                <Col>
                                    <Text style={general.textTitleCard}>End Time</Text>
                                </Col>
                            </Grid>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={study_sessions}
                            renderItem={({item}) =>
                                <Grid
                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                    <Col>
                                        <Text style={general.textDescriptionCard}>{item.weekday}</Text>
                                    </Col>
                                    <Col>
                                        <Text style={general.textDescriptionCard}>{item.start_time}</Text>
                                    </Col>
                                    <Col>
                                        <Text style={general.textDescriptionCard}>{item.end_time}</Text>
                                    </Col>
                                </Grid>
                            }
                        />
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );
            case 2:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        {
                            registers.map((item, i) =>
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => this.setModal(true, item)}
                                    style={[general.wrapperPeople, general.wrapperRowCenter]}>
                                    <View style={general.imageCircleNormal}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.course_avatar_url}}
                                            style={general.imageCircleNormal}
                                        />
                                        <View style={general.wrapperBadge}>
                                            <Text style={general.textDescriptionCard}>{item.study_time}</Text>
                                        </View>
                                    </View>

                                    <View style={[{flex: 1}, general.paddingLR]}>
                                        <Text style={general.textIstActive}>{item.name}</Text>
                                        <Text style={general.textDescriptionCard}>{item.phone}</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Icon
                                            name={item.call_status == "success" ? "ion|ios-call" : "ion|ios-call-outline"}
                                            size={30}
                                            color={'#FFFFFF'}
                                        />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            )
                        }
                        <Modal
                            presentationStyle="overFullScreen"
                            animationType="fade"
                            transparent={true}
                            visible={this.state.modal}
                        >
                            <View
                                style={general.wrapperModal}
                                {...this.panResponder.panHandlers}
                            >
                                <View style={general.wrapperModalStaff}>
                                    <View style={[general.wrapperRowCenter, general.padding]}>
                                        <View style={{flex: 1}}>
                                            <Text style={general.textTitleCardLight}>{this.state.register.name}</Text>
                                            <Text
                                                style={general.textDescriptionCardLight}>{this.state.register.email}</Text>
                                            <Text
                                                style={general.textDescriptionCardLight}>{this.state.register.phone}</Text>
                                            <Text
                                                style={general.textDescriptionCardLight}>{this.state.register.created_at}</Text>

                                        </View>
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: this.state.register.course_avatar_url}}
                                            style={general.imageCircleNormal}
                                        />
                                    </View>
                                    <View style={[general.contentModal, general.padding]}>
                                        <View>
                                            {
                                                this.state.register.saler
                                                    ?
                                                    <Text style={general.textDescriptionCardLight}>
                                                        Saler: <Text
                                                        style={[general.textDescriptionCardLight, general.buttonUser, {backgroundColor: `#${this.state.register.saler.color}`}]}>{this.state.register.saler.name}</Text></Text>
                                                    :
                                                    <Text/>
                                            }

                                        </View>
                                        <View style={general.paddingTop}>
                                            {
                                                this.state.register.campaign
                                                    ?
                                                    <Text style={general.textDescriptionCardLight}>
                                                        Campaign: <Text
                                                        style={[general.textDescriptionCardLight, general.buttonUser, {backgroundColor: `#${this.state.register.campaign.color}`}]}>{this.state.register.campaign.name}</Text></Text>
                                                    :
                                                    <Text/>
                                            }
                                        </View>

                                    </View>
                                    <TouchableOpacity style={[general.bottomModal, general.wrapperRowCenter]}>
                                        <Icon
                                            name={this.state.register.call_status == "success" ? "ion|ios-call" : "ion|ios-call-outline"}
                                            size={30}
                                            color={'#FFFFFF'}
                                        />
                                        <Text
                                            style={[general.textTitleBigLight, general.paddingLeft]}>{this.state.register.phone}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );

            case 3:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <View>
                            <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                <Col size={12}>
                                    <Text style={general.textTitleCard}>Name</Text>
                                </Col>
                                <Col size={20}  style={{alignItems:'center'}}>
                                    <Text style={general.textTitleCard}>Start</Text>
                                </Col>
                                <Col size={20}  style={{alignItems:'center'}}>
                                    <Text style={general.textTitleCard}>End</Text>
                                </Col>
                                <Col size={15}  style={{alignItems:'center'}}>
                                    <Text style={general.textTitleCard}>Status</Text>
                                </Col>
                                <Col size={15}  style={{alignItems:'center'}}>
                                    <Text style={general.textTitleCard}>Now</Text>
                                </Col>
                            </Grid>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={gens}
                            renderItem={({item}) =>
                                <Grid style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                    <Col size={15}>
                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                    </Col>
                                    <Col size={22}>
                                        <Text style={general.textDescriptionCard}>{item.start_time}</Text>
                                    </Col>
                                    <Col size={22}>
                                        <Text style={general.textDescriptionCard}>{item.end_time}</Text>
                                    </Col>
                                    <Col size={15}>
                                        <Switch
                                            value={item.status == 0 ? false : true}
                                            onValueChange={() => {
                                            }}
                                            onTintColor={'#C86AD9'}
                                        />
                                    </Col>
                                    <Col size={15}>
                                        <Switch
                                            value={item.status == 0 ? false : true}
                                            onValueChange={() => {
                                            }}
                                            onTintColor={'#C86AD9'}
                                        />
                                    </Col>

                                </Grid>
                            }
                        />
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );

            case 4:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <View>
                            <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                <Col size={20}>
                                </Col>
                                <Col size={20}>
                                    <Text style={general.textTitleCard}>Name</Text>
                                </Col>
                                <Col size={18}  style={{alignItems:'center'}}>
                                    <Text style={general.textTitleCard}>Classes</Text>
                                </Col>
                                <Col size={22}  style={{alignItems:'center'}}>
                                    <Text style={general.textTitleCard}>Duration</Text>
                                </Col>
                                <Col size={18}  style={{alignItems:'center'}}>
                                    <Text style={general.textTitleCard}>Price</Text>
                                </Col>
                            </Grid>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={courses}
                            renderItem={({item}) =>
                                <Grid style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                    <Col size={20}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.icon_url}}
                                            style={general.imageCircleNormal}
                                        />
                                    </Col>
                                    <Col size={25} style={{justifyContent: 'center'}}>
                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                    </Col >
                                    <Col size={18} style={general.wrapperCenter}>
                                        <Text style={general.textDescriptionCard}>{item.num_classes}</Text>
                                    </Col>
                                    <Col size={18} style={general.wrapperCenter}>
                                        <Text style={general.textDescriptionCard}>{item.duration}</Text>
                                    </Col>
                                    <Col size={20} style={general.wrapperCenter}>
                                        <Text style={general.textDescriptionCard}>{item.price.toString().slice(0, item.price.toString().length - 3)}k</Text>
                                    </Col>
                                </Grid>
                            }
                        />
                        <View style={general.wrapperBottomModule}/>
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
        const {colors, general} = this.props;

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
        colors: state.theme.colors,
        schedules: state.home.schedules,
        study_sessions: state.home.study_sessions,
        registers: state.home.registers,
        gens: state.home.gens,
        courses: state.home.courses
    }
}

export default connect(mapStateToProps)(TeachContainer);