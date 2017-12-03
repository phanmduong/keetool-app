import React, {Component} from 'react';
import {FlatList, Image, Modal, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import Communications from 'react-native-communications';
import {connect} from 'react-redux'
class ContactContainer extends Component {
    constructor() {
        super();
        this.state = {
            modalContact: false,
            tab: 0,
            numberPhone: '',
            title: '',
            data: [
                {
                    name: 'Nguyễn Hùng Cường',
                    phoneNumber: '01258698182',
                    workPlace: "DHBKHN",
                    avatar_url: 'data:image/jpeg;base64,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'
                },
                {
                    name: 'Nguyen Tuan Hung',
                    phoneNumber: '01699766166',
                    workPlace: 'DHBKHN',
                    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Marco_Reus_2014.jpg/1200px-Marco_Reus_2014.jpg'
                },
                {
                    name: 'Nguyen Tien Tai',
                    phoneNumber: '01234567898',
                    workPlace: "KEETOOL",
                    avatar_url: 'https://images.youtrendit.com/1455958685/desktop/trend-large/youtrendit_marco-reus-7108.jpg'
                }
            ]
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
                modalContact: false,
            });
        }
    }

    setModalContact(visible) {
        this.setState({modalContact: visible})
    }

    openModalContact(visible, title, number) {
        this.setModalContact(true);
        this.setState({numberPhone: number, title: title})
    }

    ViewSendSMS() {
        this.setState({tab: 0})
    }

    ViewCreateSMS() {
        this.setState({tab: 1})
    }

    phoneCall(numberPhone) {
        Communications.phonecall(numberPhone, true);
        this.setModalContact(false);
    }

    message(numberPhone, title) {
        Communications.text(numberPhone, title);
        this.setModalContact(false);
    }

    ShowTab() {
        const {general, colors} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <FlatList
                        style={{flex: 1, padding: 20}}
                        extraData={this.state}
                        data={this.state.data}
                        renderItem={({item}) => {
                            return (
                                <View
                                    style={[general.marginTopBottom, general.wrapperCenterLeftToRightRow]}>
                                    <View
                                        style={[general.imageRectangleSmall, general.shadow]}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.avatar_url}}
                                            style={general.imageRectangleSmall}
                                        />
                                    </View>
                                    <View style={[general.marginLeft, general.wrapperCenterLeftToRightColumn]}>
                                        <Text style={general.textTitleCard}> Họ và tên: {item.name}</Text>
                                        <Text style={general.textTitleCard}> Nơi làm việc: {item.workPlace}</Text>
                                        <Text style={general.textDescriptionCard}> Số điện thoai: <TouchableOpacity
                                            onPress={() => this.openModalContact(true, item.phoneNumber, '')}
                                            style={{height: 10, width: 100}}><Text
                                            style={{color: 'blue'}}>{item.phoneNumber}</Text></TouchableOpacity></Text>
                                    </View>
                                </View>
                            )
                        }
                        }
                    />
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
                            CONTACT
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <Content horizontal={true}
                                 showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => this.ViewSendSMS()}
                                              style={{height: 30}}>
                                <View style={
                                    this.state.tab === 0
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>
                                        Send SMS
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.ViewCreateSMS()}>
                                <View style={
                                    this.state.tab === 1
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>
                                        Create SMS
                                    </Text>

                                </View>
                            </TouchableOpacity>
                        </Content>
                    </View>

                    <View style={general.wrapperFullWidth}>
                        {this.ShowTab()}
                    </View>
                </LinearGradient>
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalContact}
                >
                    <View
                        style={general.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={general.modalCart}>
                            <View style={[general.headerModal, general.haveBorderBottom]}>
                                <Text style={general.textTitleCardDark}>
                                    Chọn Kiểu liên lạc
                                </Text>
                            </View>
                            <View style={{height: 100, width: 200, justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity
                                    onPress={() => this.phoneCall(this.state.numberPhone)}
                                    style={{height: 10, width: 200, marginTop: 20}}>
                                    <Text style = {{justifyContent: 'center', alignItems: 'center'}} >Call</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.message(this.state.numberPhone, this.state.title)}
                                    style={[general.haveBorderBottom,{height: 10, width: 200, marginTop: 20}]}>
                                    <Text style ={{justifyContent: 'center', alignItems: 'center'}} >Message</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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

export default connect(mapStateToProps)(ContactContainer);

