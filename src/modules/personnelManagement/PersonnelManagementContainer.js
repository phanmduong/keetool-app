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
import {connect} from 'react-redux';
import {wid} from "../../styles/size";

class PersonnelManagementContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
        }
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
                return ('Designer SM');
            default:
                return ('Telesale')
        }
    }

    ShowTab() {
        const {staff} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={staff}
                            renderItem={({item}) =>
                                <TouchableOpacity style={[general.wrapperPeople, general.wrapperRowCenter]}>
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
                            }
                        />
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );
            case 1:
                return (
                    <Content style={{flex: 1, padding: 20}}>

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
        staff: state.home.staff
    }
}

export default connect(mapStateToProps)(PersonnelManagementContainer);