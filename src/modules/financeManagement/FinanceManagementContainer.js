import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, PanResponder, Modal,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import {connect} from 'react-redux'
import {Col, Row, Grid} from "react-native-easy-grid";

class FinanceManagementContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            modalMoneyCollect: false,
            moneyCollect:{
                registers:[
                    {
                        course: '',
                        class_name: '',
                        class_type: '',
                        register_time: '',
                        code: '',
                        icon_url: '',
                        money: 0,
                        received_id_card: 0,
                        note: '',
                        paid_time: '',
                        is_paid: 0
                    }
                ]
            }
        }
    }

    ViewMoneyCollect() {
        this.setState({tab: 0})
    }

    ViewSendMoney() {
        this.setState({tab: 1})
    }

    ViewKeepMoney() {
        this.setState({tab: 2})
    }

    ViewPaidList() {
        this.setState({tab: 3})
    }

    ViewSpendMoney() {
        this.setState({tab: 4})
    }

    ViewSpendList() {
        this.setState({tab: 5})
    }

    ViewExpenseIncome() {
        this.setState({tab: 6})
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
                modalMoneyCollect: false,
            });
        }
    }

    setModalMoneyCollect(visible, item) {
        this.setState({
            moneyCollect:{
                registers:[
                    {
                        course: item.registers.course,
                        class_name: item.registers.course,
                        class_type: item.registers.course,
                        register_time: item.registers.course,
                        code: '',
                        icon_url: '',
                        money: 0,
                        received_id_card: 0,
                        note: '',
                        paid_time: '',
                        is_paid: 0
                    }
                ]
            }
        })

    }


    ShowTab() {
        const {general, moneyCollect} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <View>
                            <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                <Col size={30}>
                                    <Text style={general.textTitleCard}>Name</Text>
                                </Col>
                                <Col size={30}>
                                    <Text style={general.textTitleCard}>Phone</Text>
                                </Col>
                                <Col size={30} style={general.marginLeft}>
                                    <Text style={general.textTitleCard}>Email</Text>
                                </Col>
                            </Grid>
                        </View>
                        {
                            moneyCollect.map((item) =>
                                <TouchableOpacity onPress={() => this.setModalMoneyCollect(true, item)}>
                                    <Grid
                                        style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                        <Col size={30}>
                                            <Text style={general.textDescriptionCard}>{item.name}</Text>
                                        </Col>
                                        <Col size={30}>
                                            <Text style={general.textDescriptionCard}>{item.phone}</Text>
                                        </Col>
                                        <Col size={30} style={general.marginLeft}>
                                            <Text style={general.textDescriptionCard}>{item.email}</Text>
                                        </Col>
                                    </Grid>

                                </TouchableOpacity>

                            )
                        }
                        <Modal
                            presentationStyle="overFullScreen"
                            animationType="fade"
                            transparent={true}
                            visible={this.state.modalMoneyCollect}
                        >
                            <View
                                style={general.wrapperModal}
                                {...this.panResponder.panHandlers}
                            >
                                <View style={general.wrapperModalClass}>
                                    <View style={[general.wrapperRowCenter, general.padding]}>
                                        <View style={{flex: 1}}>
                                            <Text style={general.textTitleCardLight}>{this.state.classes.name}</Text>
                                            <Text
                                                style={general.textDescriptionCardLight}>{this.state.classes.study_time}</Text>
                                        </View>
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: this.state.classes.course.icon_url}}
                                            style={general.imageCircleNormal}
                                        />
                                    </View>
                                    <View style={[general.contentModal, general.padding, {paddingTop: 0}]}>
                                        <View>
                                            <Text style={general.textDescriptionCardLight}>
                                                Teacher: <Text
                                                style={[general.textDescriptionCardLight, general.buttonUser, {backgroundColor: `#${classInfo.teacher.color}`}]}>{classInfo.teacher.name}</Text></Text>

                                        </View>
                                        <View style={[general.paddingTopBottom, general.wrapperRowSpaceBetween]}>
                                            <Text style={general.textDescriptionCardLight}>
                                                Teacher Assistant: <Text
                                                style={[general.textDescriptionCardLight, general.buttonUser, {backgroundColor: `#${classInfo.teacher_assistant.color}`}]}>{classInfo.teacher_assistant.name}</Text></Text>
                                            <TouchableOpacity onPress={() => this.ViewHistoryClass()}>
                                                <Icon
                                                    name={'materialCommunity|history'}
                                                    size={20}
                                                    color={'#FFFFFF'}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flex: 1}}>
                                            {
                                                this.state.history
                                                    ?
                                                    <Content>
                                                        <Text style={[general.paddingTopBottom, general.textIstActive]}>Attendance
                                                            Class</Text>
                                                        <FlatList
                                                            showsVerticalScrollIndicator={false}
                                                            data={classInfo.attendances}
                                                            renderItem={({item}) =>
                                                                <TouchableOpacity style={general.paddingTopBottom}>
                                                                    <Text
                                                                        style={general.textDescriptionCardLight}>{item.total_attendance}
                                                                        / {registers.length}</Text>
                                                                    <View style={general.wrapperProgressLight}>
                                                                        <View
                                                                            style={[general.progress, {width: (item.total_attendance / registers.length * (wid * 0.9 - 20))}]}/>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            }
                                                        />
                                                        <Text style={[general.paddingTopBottom, general.textIstActive]}>Attendance
                                                            Teacher</Text>
                                                        <FlatList
                                                            showsVerticalScrollIndicator={false}
                                                            data={classInfo.teacher.attendances}
                                                            renderItem={({item}) =>
                                                                <TouchableOpacity
                                                                    style={general.wrapperRowSpaceBetween}>
                                                                    <Text
                                                                        style={general.textDescriptionCardLight}>Check
                                                                        in: {item.start_teaching_time}</Text>
                                                                    <Text
                                                                        style={general.textDescriptionCardLight}>Check
                                                                        in: {item.end_teaching_time}</Text>

                                                                </TouchableOpacity>
                                                            }
                                                        />
                                                    </Content>
                                                    :
                                                    <FlatList
                                                        showsVerticalScrollIndicator={false}
                                                        data={classInfo.registers}
                                                        renderItem={({item}) =>
                                                            <TouchableOpacity>
                                                                <Grid
                                                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                                                    <Col size={20}>
                                                                        <View
                                                                            style={[general.imageCircleNormal, general.shadow]}>
                                                                            <Image
                                                                                resizeMode={'cover'}
                                                                                source={{uri: item.student.avatar_url}}
                                                                                style={general.imageCircleNormal}
                                                                            />
                                                                        </View>
                                                                    </Col>
                                                                    <Col size={40} style={{justifyContent: 'center'}}>
                                                                        <Text
                                                                            style={general.textDescriptionCardLight}>{item.student.name}</Text>
                                                                    </Col>
                                                                    <Col size={10} style={general.wrapperCenter}>
                                                                        <Text
                                                                            style={general.textDescriptionCardLight}>{item.total_attendances}/{item.attendances.length}</Text>
                                                                    </Col>
                                                                    <Col size={30} style={general.wrapperCenter}>
                                                                        <Text
                                                                            style={general.textDescriptionCardLight}>{item.code}</Text>
                                                                    </Col>
                                                                </Grid>
                                                            </TouchableOpacity>
                                                        }
                                                    />
                                            }

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        <View style={general.wrapperBottomModule}/>
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
        const {colors, general} = this.props;

        return (
            <Container style={general.wrapperContainer}>
                <LinearGradient
                    colors={colors}
                    style={general.linearGradient}>
                    <View style={general.wrapperHeader}>
                        <Text style={[general.textTitleHeader]}>
                            FINANCE
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <Content horizontal={true}
                                 showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => this.ViewMoneyCollect()}
                                              style={{height: 30}}>
                                <View style={
                                    this.state.tab === 0
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>
                                        Money Collect
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.ViewSendMoney()}>
                                <View style={
                                    this.state.tab === 1
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>
                                        Send Money
                                    </Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewKeepMoney()}>
                                <View style={
                                    this.state.tab === 2
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>
                                        Keep Money
                                    </Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewPaidList()}>
                                <View style={
                                    this.state.tab === 3
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 3 ? general.textIstActive : general.textNotActive}>
                                        Paid List
                                    </Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.ViewSpendMoney()}>
                                <View style={
                                    this.state.tab === 3
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 3 ? general.textIstActive : general.textNotActive}>
                                        Spend Money
                                    </Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.ViewSpendList()}>
                                <View style={
                                    this.state.tab === 3
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 3 ? general.textIstActive : general.textNotActive}>
                                        Spend List
                                    </Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.ViewExpenseIncome()}>
                                <View style={
                                    this.state.tab === 3
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 3 ? general.textIstActive : general.textNotActive}>
                                        Expense Income
                                    </Text>

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
        moneyCollect: state.home.moneyCollect
    }
}

export default connect(mapStateToProps)(FinanceManagementContainer);