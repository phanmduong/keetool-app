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

class EmailContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
        }
    }

    ViewEmailList() {
        this.setState({tab: 0})
    }

    ViewCampaign() {
        this.setState({tab: 1})
    }

    ViewTemplates() {
        this.setState({tab: 2})
    }

    ViewForms() {
        this.setState({tab: 3})
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
                            EMAIL
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <Content horizontal={true}
                                 showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => this.ViewEmailList()}
                                              style={{height: 30}}>
                                <View style={
                                    this.state.tab === 0
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>
                                        Email List
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.ViewCampaign()}>
                                <View style={
                                    this.state.tab === 1
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>
                                        Campaign
                                    </Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewTemplates()}>
                                <View style={
                                    this.state.tab === 2
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>
                                        Templates
                                    </Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewForms()}>
                                <View style={
                                    this.state.tab === 3
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 3 ? general.textIstActive : general.textNotActive}>
                                        Forms
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

export default connect(mapStateToProps)(EmailContainer);