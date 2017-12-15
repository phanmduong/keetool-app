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
import {Col, Row, Grid} from "react-native-easy-grid";

class BaseContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
        }
    }

    ViewBasesList() {
        this.setState({tab: 0})
    }

    ViewBasesRoomList() {
        this.setState({tab: 1})
    }

    ShowTab() {
        const {general, colors, bases, rooms} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <View>
                            <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                <Col size={20}>
                                    <Text style={general.textTitleCard}>Name</Text>
                                </Col>
                                <Col size={60}>
                                    <Text style={general.textTitleCard}>Address</Text>
                                </Col>
                                <Col size={20} style={general.marginLeft}>
                                    <Text style={general.textTitleCard}>Create Time</Text>
                                </Col>
                            </Grid>
                        </View>
                        {
                            bases.map((item) =>
                                <Grid
                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                    <Col size={20}>
                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                    </Col>
                                    <Col size={60}>
                                        <Text style={general.textDescriptionCard}>{item.address}</Text>
                                    </Col>
                                    <Col size={20} style={general.marginLeft}>
                                        <Text style={general.textDescriptionCard}>{item.created_at}</Text>
                                    </Col>
                                </Grid>
                            )
                        }
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );
            case 1:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <View>
                            <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                <Col size={20}>
                                    <Text style={general.textTitleCard}>Name</Text>
                                </Col>
                                <Col size={60}>
                                    <Text style={general.textTitleCard}>Address</Text>
                                </Col>
                                <Col size={20} style={general.marginLeft}>
                                    <Text style={general.textTitleCard}>Base</Text>
                                </Col>
                            </Grid>
                        </View>
                        {
                            rooms.map((item) =>
                                <Grid
                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                    <Col size={20}>
                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                    </Col>
                                    <Col size={60}>
                                        <Text style={general.textDescriptionCard}>{item.address}</Text>
                                    </Col>
                                    <Col size={20} style={general.marginLeft}>
                                        <Text style={general.textDescriptionCard}>{item.base_name}</Text>
                                    </Col>
                                </Grid>
                            )
                        }
                        <View style={general.wrapperBottomModule}/>
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
                            BASES
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <Content horizontal={true}
                                 showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => this.ViewBasesList()}
                                              style={{height: 30}}>
                                <View style={
                                    this.state.tab === 0
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>
                                        Bases List
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewBasesRoomList()}
                                              style={{height: 30}}>
                                <View style={
                                    this.state.tab === 1
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>
                                        Room List
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
        bases: state.home.bases,
        rooms: state.home.rooms
    }
}

export default connect(mapStateToProps)(BaseContainer);