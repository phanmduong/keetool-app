import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, Modal, PanResponder, StatusBar, RefreshControl,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import Icon from '../../commons/Icon';
import {connect} from 'react-redux';
import Comunications from 'react-native-communications'
class PersonnelManagementContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            modal: false,
            staff: {
                name: '',
                avatar_url: '',
                cover_url: '',
                email: '',
                phone: '',
                role: 0,
                age: 0,
                base_id: 0,
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
        this.setState({
            modal: visible,
            staff: {
                name: item.name,
                avatar_url: item.avatar_url,
                cover_url: item.cover_url,
                email: item.email,
                phone: item.phone,
                role: item.role_id,
                age: item.age,
                base_id: item.base_id,
            }
        });
    }

    ViewEmployee() {
        this.setState({tab: 0})
    }

    ViewRole() {
        this.setState({tab: 1})
    }

    Role(role) {
        switch (role) {
            case 22:
                return ('Designer SM');
            case 21:
                return ('backend');
            case 20:
                return ('Giám đốc đào tạo');
            case 19:
                return ('Sales Manager');
            case 18:
                return ('Trợ lý Giám đốc Sales&Marketing');
            case 17:
                return ('Quản lý sách');
            case 16:
                return ('test chuyen tien');
            case 15:
                return ('Trainee');
            case 13:
                return ('Email Marketing');
            case 11:
                return ('IT');
            case 10:
                return ('Giảng viên');
            case 9:
                return ('CEO');
            case 8:
                return ('Marketing&Sales');
            case 7:
                return ('Telesale ');
        }
    }

    Base(base) {
        switch (base) {
            case 3:
                return ('Cơ sở 1:  Số 175 phố Chùa Láng - Đống Đa - Hà Nội');
            case 6:
                return ('Cơ sở 3: Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM');
            case 8:
                return ('Cơ sở 4: Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội');
        }
    }
    ShowTab() {
        const {staff, roles, general} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        {
                            staff.map((item, i) =>
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => this.setModal(true, item)}
                                    style={[general.wrapperPeople, general.wrapperRowCenter]}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{uri: item.avatar_url}}
                                        style={general.imageCircleNormal}
                                    />
                                    <View style={[{flex: 1}, general.paddingLR]}>
                                        <Text style={general.textIstActive}>{item.name}</Text>
                                        <Text style={general.textDescriptionCard}
                                              numberOfLines={1}>{item.email}</Text>
                                    </View>
                                    <View style={{width: 50}}>
                                        <Text numberOfLines={1}
                                              style={general.textIstActive}>{this.Role(item.role_id)}</Text>
                                    </View>
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
                                            <Text style={general.textTitleCardLight}>{this.state.staff.name}</Text>
                                            <Text style={general.textDescriptionCardLight}>{this.state.staff.email}</Text>
                                            <Text style={general.textDescriptionCardLight}>{this.Base(this.state.staff.base_id)}</Text>
                                        </View>
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: this.state.staff.avatar_url}}
                                            style={general.imageCircleNormal}
                                        />
                                    </View>
                                    <View style={[general.contentModal, general.wrapperCenter]}>
                                        <Text
                                            style={general.textTitleBigLight}>{this.Role(this.state.staff.role)}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={[general.bottomModal, general.wrapperRowCenter]}
                                        onPress = {() => Comunications.text(this.state.staff.phone, 'chúc mọi sự tốt lành')}
                                    >
                                        <Icon
                                            name="material|sms"
                                            size={30}
                                            color={'#FFFFFF'}
                                        />
                                        <Text
                                            style={[general.textTitleBigLight, general.paddingLeft]}>{this.state.staff.phone}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[general.bottomModal, general.wrapperRowCenter]}
                                        onPress = {() => Comunications.phonecall(this.state.staff.phone, true)}
                                    >
                                        <Icon
                                            name="material|phone"
                                            size={30}
                                            color={'#FFFFFF'}
                                        />
                                        <Text
                                            style={[general.textTitleBigLight, general.paddingLeft]}>{this.state.staff.phone}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );
            case 1:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <View style={[general.wrapperRowSpaceBetween, general.paddingBottom, general.haveBorderBottom]}>
                            <Text style={general.textTitleCard}>Role</Text>
                            <Text style={general.textTitleCard}>Authorities</Text>
                        </View>
                        {
                            roles.map((item, i) =>
                                <View key={i}
                                      style={[general.wrapperRowSpaceBetween, general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                    <Text style={general.textDescriptionCard}>{item.role_title}</Text>
                                    <Text style={general.textDescriptionCard}>{item.num_tabs}</Text>
                                </View>
                            )
                        }
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );

        }
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
                            PERSONNEL
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <TouchableOpacity onPress={() => this.ViewEmployee()}>
                            <View style={
                                this.state.tab === 0
                                    ?
                                    general.wrapperMenuTextIsActive
                                    :
                                    general.wrapperMenuTextNotActive
                            }>
                                <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>Employee</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.ViewRole()}>
                            <View style={
                                this.state.tab === 1
                                    ?
                                    general.wrapperMenuTextIsActive
                                    :
                                    general.wrapperMenuTextNotActive
                            }>

                                <Text
                                    style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>Role</Text>

                            </View>
                        </TouchableOpacity>
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
        staff: state.home.staff,
        roles: state.home.roles,
    }
}

export default connect(mapStateToProps)(PersonnelManagementContainer);