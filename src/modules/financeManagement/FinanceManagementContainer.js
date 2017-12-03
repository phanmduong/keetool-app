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

class FinanceManagementContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
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
        colors: state.theme.colors
    }
}

export default connect(mapStateToProps)(FinanceManagementContainer);