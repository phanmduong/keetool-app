import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, Modal, PanResponder
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import {connect} from 'react-redux'
import {Col, Grid} from "react-native-easy-grid";
import Loading from '../../commons/Loading';

class EmailContainer extends Component {
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

    ViewEmailList() {
        this.isLoading();
        this.setState({tab: 0})
    }

    ViewCampaign() {
        this.isLoading();
        this.setState({tab: 1})
    }

    ViewTemplates() {
        this.isLoading();
        this.setState({tab: 2})
    }

    ViewForms() {
        this.isLoading();
        this.setState({tab: 3})
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
        const {general, colors, subscribers_list, subscriber, campaigns, email_templates, email_forms} = this.props;
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
                                            <Col size={80}>
                                                <Text style={general.textTitleCard}>Name</Text>
                                            </Col>
                                            <Col size={20}>

                                            <Text style={general.textTitleCard}>Subscriber</Text>
                                            </Col>
                                        </Grid>
                                    </View>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={subscribers_list}
                                        renderItem={({item}) =>
                                            <TouchableOpacity
                                                onPress={() => this.setModalSubscriber(true)}
                                            >
                                                <Grid
                                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                                    <Col size={80}>

                                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                                    </Col>
                                                    <Col style={{paddingLeft: 10}} size={20}>
                                                        <Text style={general.textDescriptionCard}>{item.total_subscribers}</Text>
                                                    </Col>
                                                </Grid>
                                            </TouchableOpacity>

                                        }
                                    />
                                </View>
                        }
                        <Modal
                            presentationStyle="overFullScreen"
                            animationType="fade"
                            transparent={true}
                            visible={this.state.modalMoneySubscriber}
                        >
                            <View
                                style={general.wrapperModal}
                                {...this.panResponder.panHandlers}
                            >
                                <View style={general.wrapperModalClass}>
                                    <Content>
                                        {
                                            subscriber.map((item, i) =>
                                                <TouchableOpacity
                                                    key={i}
                                                    style={[general.wrapperPeople, general.wrapperRowCenter, general.haveBorderBottom]}>
                                                    <View style={[{flex: 1}, general.paddingLR]}>
                                                        <Text style={general.textIstActive}>{item.email}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        }
                                    </Content>

                                </View>
                            </View>
                        </Modal>
                        <View style={general.wrapperBottomModule}/>
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
                                        <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                            <Col size={80}>
                                                <Text style={general.textTitleCard}>Name</Text>
                                            </Col>
                                            <Col size={20}>

                                                <Text style={general.textTitleCard}>Owner</Text>
                                            </Col>
                                        </Grid>
                                    </View>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={campaigns}
                                        renderItem={({item}) =>
                                            <TouchableOpacity
                                                onPress={() => this.setModalSubscriber(true)}
                                            >
                                                <Grid
                                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                                    <Col size={80}>
                                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                                    </Col>
                                                    <Col style={{paddingLeft: 10}} size={20}>
                                                        <Text style={general.textDescriptionCard}>{item.owner.name}</Text>
                                                    </Col>
                                                </Grid>
                                            </TouchableOpacity>

                                        }
                                    />
                                </View>
                        }
                    </Content>
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
                                    {
                                        email_templates.map((item, i) =>
                                            <TouchableOpacity
                                                key={i}
                                                activeOpacity={0.8}
                                                style={[general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{uri: item.thumbnail_url}}
                                                    style={general.imageFeature}
                                                />
                                                <View style={[general.marginTop, general.wrapperCenterLeftToRightColumn]}>
                                                    <Text style={general.textTitleCard}>{item.name.toUpperCase()}</Text>
                                                    <Text style={general.textDescriptionCard}>{item.owner.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }

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
                                        <Grid style={[general.paddingBottom, general.haveBorderBottom]}>
                                            <Col size={80}>
                                                <Text style={general.textTitleCard}>Name</Text>
                                            </Col>
                                            <Col size={20}>
                                                <Text style={general.textTitleCard}>Owner</Text>
                                            </Col>
                                        </Grid>
                                    </View>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={email_forms}
                                        renderItem={({item}) =>
                                            <TouchableOpacity
                                                onPress={() => this.setModalSubscriber(true)}
                                            >
                                                <Grid
                                                    style={[general.paddingBottom, general.haveBorderBottom, general.paddingTop]}>
                                                    <Col size={80}>

                                                        <Text style={general.textDescriptionCard}>{item.name}</Text>
                                                    </Col>
                                                    <Col style={{paddingLeft: 10}} size={20}>
                                                        <Text style={general.textDescriptionCard}>{item.creator.name}</Text>
                                                    </Col>
                                                </Grid>
                                            </TouchableOpacity>

                                        }
                                    />
                                </View>
                        }
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
        colors: state.theme.colors,
        subscribers_list: state.home.subscribers_list,
        subscriber: state.home.subscriber,
        campaigns: state.home.campaigns,
        email_templates: state.home.email_templates,
        email_forms: state.home.email_forms,
    }
}

export default connect(mapStateToProps)(EmailContainer);