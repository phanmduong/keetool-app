import React, {Component} from 'react';
import {FlatList, Modal, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import {connect} from 'react-redux'
import Icon from '../../commons/Icon';
import {Col, Grid} from "react-native-easy-grid";
import Loading from '../../commons/Loading';
import Communications from 'react-native-communications';
import PercentageCircle from 'react-native-percentage-circle';

class MarketingManagementContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false,
            modalTeleSaleHistory: false,
            tele_calls: {
                student: {
                    name: "",
                    email: "",
                    phone: ""
                },
                call_status: "",
                caller: {
                    name: "",
                    color: ""
                },
                note: "",
                call_time: ""
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
                modalTeleSaleHistory: false,
            });
        }
    }

    setModalTeleSaleHistory(visible, item) {
        this.setState({
            modalTeleSaleHistory: visible,
            tele_calls: {
                student: {
                    name: item.student.name,
                    email: item.student.email,
                    phone: item.student.phone
                },
                call_status: item.call_status,
                caller: {
                    name: item.caller.name,
                    color: item.caller.color
                },
                note: item.note,
                call_time: item.call_time
            }
        })


    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    ViewTeleSale() {
        this.isLoading();
        this.setState({tab: 0})
    }

    ViewTeleSaleHistory() {
        this.isLoading();
        this.setState({tab: 1})
    }

    ViewStudents() {
        this.isLoading();
        this.setState({tab: 2})
    }

    ViewCampaigns() {
        this.isLoading();
        this.setState({tab: 3})
    }

    ViewSales() {
        this.isLoading();
        this.setState({tab: 4})
    }

    ViewSummary() {
        this.isLoading();
        this.setState({tab: 5})
    }

    ShowTab() {
        const {general, colors, tele_call, marketing_campaigns} = this.props;
        const {isLoading, tele_calls} = this.state;
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

                                </View>
                        }
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
                                <View style={{padding: 20}}>
                                    <View>
                                        <Grid
                                            style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                            <Col style={general.paddingRight}>
                                                <Text style={general.textDescriptionCardLight}>Caller</Text>
                                            </Col>
                                            <Col>
                                                <Text style={general.textDescriptionCardLight}>Student</Text>
                                            </Col>
                                            <Col>
                                                <Text style={general.textDescriptionCardLight}>Phone</Text>
                                            </Col>
                                        </Grid>
                                    </View>

                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={tele_call}
                                        renderItem={({item}) =>
                                            <TouchableOpacity
                                                onPress={() => this.setModalTeleSaleHistory(true, item)}
                                            >
                                                <Grid
                                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                                    <Col style={general.paddingRight}>
                                                        <Text><Text
                                                            style={[general.textDescriptionCardLight, {backgroundColor: `#${item.caller.color}`}]}>{item.caller.name}</Text></Text>
                                                    </Col>
                                                    <Col>
                                                        <Text
                                                            style={general.textDescriptionCardLight}>{item.student.name}</Text>
                                                    </Col>
                                                    <Col>
                                                        <Text
                                                            style={general.textDescriptionCardLight}>{item.student.phone}</Text>
                                                    </Col>
                                                </Grid>
                                            </TouchableOpacity>

                                        }
                                    />

                                    <Modal
                                        presentationStyle="overFullScreen"
                                        animationType="fade"
                                        transparent={true}
                                        visible={this.state.modalTeleSaleHistory}
                                    >
                                        <View
                                            style={general.wrapperModal}
                                            {...this.panResponder.panHandlers}
                                        >
                                            <View style={general.wrapperModalStaff}>
                                                <View style={[general.wrapperRowCenter, general.padding]}>
                                                    <View style={{flex: 1}}>
                                                        <Text
                                                            style={general.textTitleCardLight}>{tele_calls.student.name}</Text>
                                                    </View>
                                                </View>
                                                <View style={[general.contentModal, general.padding]}>
                                                    <View>

                                                        <Text style={general.textDescriptionCardLight}>
                                                            Caller: <Text
                                                            style={[general.textDescriptionCardLight, general.buttonUser, {backgroundColor: `#${tele_calls.caller.color}`}]}>{tele_calls.caller.name}</Text></Text>
                                                        <Text/>

                                                    </View>
                                                </View>
                                                <TouchableOpacity
                                                    style={[general.bottomModal, general.wrapperRowCenter]}
                                                    onPress={() => {
                                                        Communications.phonecall(tele_calls.student.phone, true)
                                                    }}
                                                >
                                                    <Icon
                                                        name={tele_calls.call_status == "success" ? "ion|ios-call" : "ion|ios-call-outline"}
                                                        size={30}
                                                        color={'#FFFFFF'}
                                                    />
                                                    <Text
                                                        style={[general.textTitleBigLight, general.paddingLeft]}>{tele_calls.student.phone}</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                    </Modal>
                                    <View style={general.wrapperBottomModule}/>
                                </View>
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
                                <View style={{padding: 20}}>

                                </View>
                        }
                    </Content>
                );
            case 3:
                return (
                    <Content style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <View style={{padding: 20}}>
                                    <View>
                                        <Grid
                                            style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                            <Col style={general.paddingRight}>
                                                <Text style={general.textDescriptionCardLight}>Campaign</Text>
                                            </Col>
                                        </Grid>
                                    </View>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={marketing_campaigns}
                                        renderItem={({item}) =>
                                            <TouchableOpacity
                                                onPress={() => this.setModalTeleSaleHistory(true, item)}
                                            >
                                                <Grid
                                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                                    <Col style={general.paddingRight}>
                                                        <Text><Text
                                                            style={[general.textDescriptionCardLight, {backgroundColor: `#${item.color}`}]}>{item.name}</Text></Text>
                                                    </Col>
                                                </Grid>
                                            </TouchableOpacity>

                                        }
                                    />
                                    <View style={general.wrapperBottomModule}/>
                                </View>
                        }
                    </Content>
                );
            case 4:
                return (
                    <Content style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <View style={{padding: 20}}></View>
                        }
                    </Content>
                );
            case 5:
                return (
                    <Content style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <View style={{padding: 20}}></View>
                        }
                    </Content>
                );
            case 6:
                return (
                    <Content style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <View style={{padding: 20}}></View>
                        }
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
                            MARKETING
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <Content horizontal={true}
                                 showsHorizontalScrollIndicator={false}>
                            {/*<TouchableOpacity onPress={() => this.ViewTeleSale()}*/}
                                              {/*style={{height: 30}}>*/}
                                {/*<View style={*/}
                                    {/*this.state.tab === 0*/}
                                        {/*?*/}
                                        {/*general.wrapperMenuTextIsActive*/}
                                        {/*:*/}
                                        {/*general.wrapperMenuTextNotActive*/}
                                {/*}>*/}
                                    {/*<Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>*/}
                                        {/*Telesale*/}
                                    {/*</Text>*/}
                                {/*</View>*/}
                            {/*</TouchableOpacity>*/}

                            <TouchableOpacity onPress={() => this.ViewTeleSaleHistory()}
                                              style={{height: 30}}>
                                <View style={
                                    this.state.tab === 1
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>
                                        Telesale History
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {/*<TouchableOpacity onPress={() => this.ViewStudents()}>*/}
                                {/*<View style={*/}
                                    {/*this.state.tab === 2*/}
                                        {/*?*/}
                                        {/*general.wrapperMenuTextIsActive*/}
                                        {/*:*/}
                                        {/*general.wrapperMenuTextNotActive*/}
                                {/*}>*/}

                                    {/*<Text*/}
                                        {/*style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>*/}
                                        {/*Students*/}
                                    {/*</Text>*/}

                                {/*</View>*/}
                            {/*</TouchableOpacity>*/}
                            <TouchableOpacity onPress={() => this.ViewCampaigns()}>
                                <View style={
                                    this.state.tab === 3
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 3 ? general.textIstActive : general.textNotActive}>
                                        Campaigns
                                    </Text>

                                </View>
                            </TouchableOpacity>
                            {/*<TouchableOpacity onPress={() => this.ViewSales()}>*/}
                                {/*<View style={*/}
                                    {/*this.state.tab === 4*/}
                                        {/*?*/}
                                        {/*general.wrapperMenuTextIsActive*/}
                                        {/*:*/}
                                        {/*general.wrapperMenuTextNotActive*/}
                                {/*}>*/}

                                    {/*<Text*/}
                                        {/*style={this.state.tab === 4 ? general.textIstActive : general.textNotActive}>*/}
                                        {/*Sales*/}
                                    {/*</Text>*/}

                                {/*</View>*/}
                            {/*</TouchableOpacity>*/}
                            {/*<TouchableOpacity onPress={() => this.ViewSummary()}>*/}
                                {/*<View style={*/}
                                    {/*this.state.tab === 5*/}
                                        {/*?*/}
                                        {/*general.wrapperMenuTextIsActive*/}
                                        {/*:*/}
                                        {/*general.wrapperMenuTextNotActive*/}
                                {/*}>*/}

                                    {/*<Text*/}
                                        {/*style={this.state.tab === 5 ? general.textIstActive : general.textNotActive}>*/}
                                        {/*Summary*/}
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
        tele_call: state.home.tele_calls,
        marketing_campaigns: state.home.marketing_campaigns,
    }
}

export default connect(mapStateToProps)(MarketingManagementContainer);