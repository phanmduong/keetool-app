import React, {Component} from 'react';
import {Image, Modal, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import {connect} from 'react-redux'
import Icon from '../../commons/Icon';
import Loading from '../../commons/Loading';
import Communications from 'react-native-communications';

class MarketingManagementContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 1,
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
                                    {
                                        tele_call.map((item, i) =>
                                            <TouchableOpacity
                                                key={i}
                                                onPress={() => this.setModalTeleSaleHistory(true, item)}
                                                style={[general.wrapperPeople, general.wrapperRowCenter]}
                                            >
                                                <View style={[{flex: 1}, general.paddingLR]}>
                                                    <Text style={general.textIstActive}>{item.student.name}</Text>
                                                    <Text style={general.textDescriptionCard}
                                                          numberOfLines={1}>{item.student.phone}</Text>
                                                </View>
                                                <TouchableOpacity onPress={() => {
                                                    Communications.phonecall(item.phone, true)
                                                }}>
                                                    <Icon
                                                        name={item.call_status == "success" ? "ion|ios-call" : "ion|ios-call-outline"}
                                                        size={30}
                                                        style={general.iconStyle}
                                                    />
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                        )
                                    }

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
                                                            style={[general.textDescriptionCardLight, general.buttonUser
                                                                // , {backgroundColor: `#${tele_calls.caller.color}`}
                                                            ]}>{tele_calls.caller.name}</Text></Text>
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
                                    {
                                        marketing_campaigns.map((item, i) =>
                                            <TouchableOpacity key={i}
                                                              style={[general.marginTopBottom, general.shadow, {marginTop: 20}]}
                                            >
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{uri: item.avatar_url}}
                                                    style={general.imageFeature}
                                                />
                                                <View
                                                    style={[general.marginTop, general.wrapperCenterLeftToRightColumn]}>
                                                    <Text style={general.textTitleCard}>{item.name.toUpperCase()}</Text>
                                                    <Text style={general.textDescriptionCard}>ID : {item.id}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
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