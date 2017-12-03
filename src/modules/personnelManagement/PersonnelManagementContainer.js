import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, Platform, Animated, StatusBar, RefreshControl,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import {connect} from 'react-redux'

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
                            MANAGEMENT
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
        colors: state.theme.colors
    }
}
export default connect(mapStateToProps)(PersonnelManagementContainer);