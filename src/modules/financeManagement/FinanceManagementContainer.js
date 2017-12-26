import React, {Component} from 'react';
import {Image, Modal, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import Icon from '../../commons/Icon';
import {connect} from 'react-redux'
import {Col, Grid} from "react-native-easy-grid";
import Communications from 'react-native-communications';
import Loading from '../../commons/Loading';

class FinanceManagementContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            modalMoneyCollect: false,
            modalPaidList: false,
            display: true,
            isLoading: false,
            registers: [
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
                    is_paid: 0,

                }
            ],
            paidCallItem: {
                student: {
                    id: '',
                    name: '',
                    email: '',
                    phone: ''
                },
                money: 0,
                code: '',
                note: '',
                paid_status: undefined,
                paid_time: '',
                paid_time_full: '',
                course_money: 0,
                class: {
                    name: '',
                    icon_url: ''
                },
                collector: {
                    name: '',
                    color: ''
                }
            }

        }
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    ViewMoneyCollect() {
        this.isLoading()
        this.setState({tab: 0})
    }

    ViewSendMoney() {
        this.isLoading()
        this.setState({tab: 1})
    }

    ViewKeepMoney() {
        this.isLoading()
        this.setState({tab: 2})
    }

    ViewPaidList() {
        this.isLoading()
        this.setState({tab: 3})
    }

    ViewSpendMoney() {
        this.isLoading()
        this.setState({tab: 4})
    }

    ViewSpendList() {
        this.isLoading()
        this.setState({tab: 5})
    }

    ViewExpenseIncome() {
        this.isLoading()
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
                modalPaidList: false,
            });
        }
    }

    setModalMoneyCollect(visible, item) {
        this.setState({
            modalMoneyCollect: visible,
            registers: item.registers
        })
    }

    setModalPaidList(visible, item) {
        this.setState({
            modalPaidList: visible,
            paidCallItem: item
        })
    }


    ShowTab() {
        const {general, moneyCollect, paidList} = this.props;
        const {paidCallItem, isLoading} = this.state;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <View style={{padding: 20}}>
                                    <View>
                                        <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                            <Col>
                                                <Text style={general.textTitleCard}>Name</Text>
                                            </Col>
                                            <Col>
                                                <Text style={general.textTitleCard}>Email</Text>
                                            </Col>
                                            <Col>
                                                <Text style={general.textTitleCard}>Phone</Text>
                                            </Col>
                                        </Grid>
                                    </View>
                                    {
                                        moneyCollect.map((item) =>
                                            <TouchableOpacity onPress={() => this.setModalMoneyCollect(true, item)}>
                                                <Grid
                                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                                    <Col>
                                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                                    </Col>
                                                    <Col>
                                                        <Text style={general.textDescriptionCard}>{item.email}</Text>
                                                    </Col>
                                                    <Col>
                                                        <Text style={general.textDescriptionCard}>{item.phone}</Text>
                                                    </Col>
                                                </Grid>
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
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
                                    <Content>
                                        {
                                            this.state.registers.map((item, i) =>
                                                <TouchableOpacity
                                                    key={i}
                                                    style={[general.wrapperPeople, general.wrapperRowCenter, general.haveBorderBottom, {padding: 5}]}>
                                                    <View style={[general.imageCircleNormal, general.shadow]}>
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={{uri: item.icon_url}}
                                                            style={general.imageCircleNormal}
                                                        />
                                                    </View>

                                                    <View style={[{flex: 1}, general.paddingLR]}>
                                                        <Text style={general.textTitleCardLight}>{item.course}</Text>
                                                        <Text
                                                            style={general.textDescriptionCardLight}>{item.class_name}</Text>
                                                    </View>
                                                    <Text
                                                        style={[general.textDescriptionCardLight]}>{item.money == 0 ? 'Chưa nộp tiền' : item.money + "k"}</Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    </Content>

                                </View>
                            </View>
                        </Modal>
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );
            case 1:
                return (
                    <Content style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <View/>
                        }
                    </Content>
                );

            case 2:
                return (
                    <Content style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <View/>
                        }
                    </Content>
                );

            case 3:
                return (
                    <View style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <Content style={{padding: 20}}>
                                    {
                                        paidList.map((item, i) =>
                                            <TouchableOpacity
                                                key={i}
                                                onPress={() => this.setModalPaidList(true, item)}
                                                style={[general.wrapperPeople, general.wrapperRowCenter, general.haveBorderBottom]}>
                                                <View style={[general.imageCircleNormal, general.shadow]}>
                                                    <Image
                                                        resizeMode={'cover'}
                                                        source={{uri: item.class.icon_url}}
                                                        style={general.imageCircleNormal}
                                                    />
                                                </View>

                                                <View style={[{flex: 1}, general.paddingLR]}>
                                                    <Text style={general.textIstActive}>{item.student.name}</Text>
                                                    <Text
                                                        style={general.textDescriptionCard}>{item.student.phone}</Text>
                                                </View>
                                                <Text>
                                                    <Text
                                                        style={general.textDescriptionCard}>
                                                        {item.money == '' ? '0' : item.money.toString().slice(0, item.money.toString().length - 3)}k</Text>
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                </Content>

                        }
                        <Modal
                            presentationStyle="overFullScreen"
                            animationType="fade"
                            transparent={true}
                            visible={this.state.modalPaidList}
                        >
                            <View
                                style={general.wrapperModal}
                                {...this.panResponder.panHandlers}
                            >
                                <View style={general.wrapperModalStaff}>
                                    <View style={[general.wrapperRowCenter, general.padding]}>
                                        <View style={{flex: 1}}>
                                            <Text style={general.textTitleCardLight}>{paidCallItem.student.name}</Text>
                                            <Text
                                                style={general.textDescriptionCardLight}>{paidCallItem.student.email}</Text>
                                            <Text
                                                style={general.textDescriptionCardLight}>{paidCallItem.student.phone}</Text>
                                        </View>
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: paidCallItem.class.icon_url}}
                                            style={general.imageCircleNormal}
                                        />
                                    </View>
                                    <View style={[general.contentModal, general.padding]}>
                                        <View>
                                            {
                                                paidCallItem
                                                    ?
                                                    <Text style={general.textDescriptionCardLight}>
                                                        Collector: <Text
                                                        style={[general.textDescriptionCardLight, general.buttonUser,
                                                            // {backgroundColor: `#${paidCallItem.collector.color}`}
                                                            ]}>{paidCallItem.collector.name}</Text></Text>
                                                    :
                                                    <Text/>
                                            }
                                            <Text style={general.textDescriptionCardLight}>
                                                Money: <Text
                                                style={[general.textDescriptionCardLight, general.buttonUser]}>{paidCallItem.money == '' ? '0' : paidCallItem.money.toString().slice(0, paidCallItem.money.toString().length - 3)}k</Text></Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={[general.bottomModal, general.wrapperRowCenter]}
                                        onPress={() => {
                                            Communications.phonecall(paidCallItem.student.phone, true)
                                        }}
                                    >
                                        <Icon
                                            name={"ion|ios-call"}
                                            size={30}
                                            color={'#FFFFFF'}
                                        />
                                        <Text
                                            style={[general.textTitleBigLight, general.paddingLeft]}>{paidCallItem.student.phone}</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </Modal>

                    </View>
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
                            {/*<TouchableOpacity onPress={() => this.ViewSendMoney()}>*/}
                            {/*<View style={*/}
                            {/*this.state.tab === 1*/}
                            {/*?*/}
                            {/*general.wrapperMenuTextIsActive*/}
                            {/*:*/}
                            {/*general.wrapperMenuTextNotActive*/}
                            {/*}>*/}

                            {/*<Text*/}
                            {/*style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>*/}
                            {/*Send Money*/}
                            {/*</Text>*/}

                            {/*</View>*/}
                            {/*</TouchableOpacity>*/}
                            {/*<TouchableOpacity onPress={() => this.ViewKeepMoney()}>*/}
                            {/*<View style={*/}
                            {/*this.state.tab === 2*/}
                            {/*?*/}
                            {/*general.wrapperMenuTextIsActive*/}
                            {/*:*/}
                            {/*general.wrapperMenuTextNotActive*/}
                            {/*}>*/}

                            {/*<Text*/}
                            {/*style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>*/}
                            {/*Keep Money*/}
                            {/*</Text>*/}

                            {/*</View>*/}
                            {/*</TouchableOpacity>*/}
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

                            {/*<TouchableOpacity onPress={() => this.ViewSpendMoney()}>*/}
                            {/*<View style={*/}
                            {/*this.state.tab === 4*/}
                            {/*?*/}
                            {/*general.wrapperMenuTextIsActive*/}
                            {/*:*/}
                            {/*general.wrapperMenuTextNotActive*/}
                            {/*}>*/}

                            {/*<Text*/}
                            {/*style={this.state.tab === 4 ? general.textIstActive : general.textNotActive}>*/}
                            {/*Spend Money*/}
                            {/*</Text>*/}

                            {/*</View>*/}
                            {/*</TouchableOpacity>*/}

                            {/*<TouchableOpacity onPress={() => this.ViewSpendList()}>*/}
                            {/*<View style={*/}
                            {/*this.state.tab === 5*/}
                            {/*?*/}
                            {/*general.wrapperMenuTextIsActive*/}
                            {/*:*/}
                            {/*general.wrapperMenuTextNotActive*/}
                            {/*}>*/}

                            {/*<Text*/}
                            {/*style={this.state.tab === 5 ? general.textIstActive : general.textNotActive}>*/}
                            {/*Spend List*/}
                            {/*</Text>*/}

                            {/*</View>*/}
                            {/*</TouchableOpacity>*/}

                            {/*<TouchableOpacity onPress={() => this.ViewExpenseIncome()}>*/}
                            {/*<View style={*/}
                            {/*this.state.tab === 6*/}
                            {/*?*/}
                            {/*general.wrapperMenuTextIsActive*/}
                            {/*:*/}
                            {/*general.wrapperMenuTextNotActive*/}
                            {/*}>*/}
                            {/*<Text*/}
                            {/*style={this.state.tab === 6 ? general.textIstActive : general.textNotActive}>*/}
                            {/*Expense Income*/}
                            {/*</Text>*/}
                            {/*</View>*/}
                            {/*</TouchableOpacity>*/}


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
        moneyCollect: state.home.moneyCollect,
        paidList: state.home.paidList,
    }
}

export default connect(mapStateToProps)(FinanceManagementContainer);