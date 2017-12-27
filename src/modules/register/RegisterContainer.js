import React, {Component} from 'react';
import {FlatList, Image, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import {connect} from 'react-redux'
import {Col, Grid} from "react-native-easy-grid";
import Loading from '../../commons/Loading';

class RegisterContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false,
            modalMoneySubscriber: false,
        }
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    ViewShiftRegisters() {
        this.isLoading();
        this.setState({tab: 0})
    }

    ViewRegisShift() {
        this.isLoading();
        this.setState({tab: 1})
    }

    ViewHistory() {
        this.isLoading();
        this.setState({tab: 2})
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
                modalMoneySubscriber: false,
            });
        }
    }

    setModalSubscriber(visible) {
        this.setState({
            modalMoneySubscriber: visible,
        })
    }


    ShowTab() {
        const {colors, shift_sessions, shift_register, general} = this.props;
        const {isLoading} = this.state;
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
                                                <Text style={general.textTitleCard}>Start</Text>
                                            </Col>
                                            <Col>
                                                <Text style={general.textTitleCard}>End</Text>
                                            </Col>

                                        </Grid>
                                    </View>
                                    {
                                        shift_sessions.map((item, i) =>
                                            <TouchableOpacity
                                                key={i}
                                                onPress={() => this.setModalSubscriber(true)}
                                            >
                                                <Grid
                                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                                    <Col>
                                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                                    </Col>
                                                    <Col>
                                                        <Text
                                                            style={general.textDescriptionCard}>{item.start_time}</Text>
                                                    </Col>
                                                    <Col>
                                                        <Text style={general.textDescriptionCard}>{item.end_time}</Text>
                                                    </Col>

                                                </Grid>
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                        }
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );

            case 1:
                return (
                    <View style={{flex: 1}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <Content
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    style={{padding: 20}}>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        horizontal={true}
                                        data={shift_register}
                                        renderItem={({item}) =>
                                            <TouchableOpacity
                                                onPress={() => this.setModalSubscriber(true)}
                                            >
                                                <View
                                                    style={[general.wrapperCenter, general.marginRight, general.shadow, {borderRadius: 15}]}>
                                                    <View style={general.trelloCart}>
                                                        <View style={[general.headerModal, general.haveBorderBottom]}>
                                                            <Text style={general.textTitleCardDark}>
                                                                {item.date}
                                                            </Text>
                                                        </View>
                                                        <View style={[general.contentTrello, {alignItems: 'center'}]}>
                                                            <FlatList
                                                                showsVerticalScrollIndicator={false}
                                                                data={item.shifts}
                                                                renderItem={({item}) =>
                                                                    <TouchableOpacity
                                                                        onPress={() => this.setModalSubscriber(true)}
                                                                    >
                                                                        <View
                                                                            style={[general.wrapperItem, general.marginTop, general.wrapperRowCenter, general.paddingLR]}>
                                                                            <Image
                                                                                resizeMode={'cover'}
                                                                                source={{uri: item.user.avatar_url}}
                                                                                style={general.imageCircleNormal}
                                                                            />
                                                                            <View style={general.marginLeft}>
                                                                                <Text
                                                                                    style={general.textDescriptionCardDark}>
                                                                                    {item.user.name}
                                                                                </Text>
                                                                            </View>

                                                                        </View>
                                                                    </TouchableOpacity>
                                                                }
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>

                                        }
                                    />
                                </Content>
                        }
                    </View>
                );

            case 2:
                return (
                    <Content
                        showsVerticalScrollIndicator={false}
                        style={{flex: 1}}>
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
                            REGISTER
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <Content horizontal={true}
                                 showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => this.ViewShiftRegisters()}
                                              style={{height: 30}}>
                                <View style={
                                    this.state.tab === 0
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>
                                        Shift
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.ViewRegisShift()}>
                                <View style={
                                    this.state.tab === 1
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>
                                        Register
                                    </Text>

                                </View>
                            </TouchableOpacity>
                            {/*<TouchableOpacity onPress={() => this.ViewHistory()}>*/}
                                {/*<View style={*/}
                                    {/*this.state.tab === 2*/}
                                        {/*?*/}
                                        {/*general.wrapperMenuTextIsActive*/}
                                        {/*:*/}
                                        {/*general.wrapperMenuTextNotActive*/}
                                {/*}>*/}

                                    {/*<Text*/}
                                        {/*style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>*/}
                                        {/*History*/}
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
        shift_sessions: state.home.shift_sessions,
        shift_register: state.home.shift_register,
    }
}

export default connect(mapStateToProps)(RegisterContainer);