import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, Platform, Animated, StatusBar, RefreshControl,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import * as size from '../../styles/size';
import * as colors from '../../styles/generalStyle';
import * as actions from './changeThemeAction';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';


class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            feature: {
                "url": "https://images.unsplash.com/photo-1505906960586-b2f5793971ad?auto=format&fit=crop&w=707&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            data:
                [

                    {
                        "url": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1501159873713-dc65286617cc?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1485436442739-c12c6e3673af?auto=format&fit=crop&w=553&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                ]
        }
    }

    componentWillMount() {

    }

    ViewDashboard() {
        this.setState({tab: 0})
    }

    ViewBlog() {
        this.setState({tab: 1})
    }

    ViewCard() {
        this.setState({tab: 2})
    }

    ShowTab() {
        const {general, colors} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content
                        showsVerticalScrollIndicator={false}
                        style={{flex: 1}}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={[general.wrapperImageFeature, general.marginTopBottom, general.shadow, general.paddingLR, {marginTop: 20}]}>
                            <Image
                                resizeMode={'cover'}
                                source={{uri: this.state.feature.url}}
                                style={general.imageFeature}
                            />
                        </TouchableOpacity>
                        <Text style={[general.textIstActive, general.marginTopBottom, general.paddingLR]}>
                            Album
                        </Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={({item}) =>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={item == this.state.data[0] ? [general.wrapperImageSquare, general.marginTopBottom, general.shadow, general.marginLeftFar] : [general.wrapperImageSquare, general.marginTopBottom, general.shadow, general.marginLeft]}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{uri: item.url}}
                                        style={[general.imageSquare]}
                                    />
                                </TouchableOpacity>
                            }
                        />
                        <Text style={[general.textIstActive, general.marginTopBottom, general.paddingLR]}>
                            Update
                        </Text>
                        <Content style={[{height: size.wid * 3 / 5 + 60}, general.paddingLR]}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                renderItem={({item}) =>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={[general.marginTopBottom, general.wrapperCenterLeftToRightRow]}>
                                        <View
                                            style={[general.imageSquareAvatar, general.shadow]}
                                        >
                                            <Image
                                                resizeMode={'cover'}
                                                source={{uri: item.url}}
                                                style={general.imageSquareAvatar}
                                            />
                                        </View>
                                        <View style={[general.marginLeft, general.wrapperCenterLeftToRightColumn]}>
                                            <Text style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                            <Text style={general.textDescriptionCard}>{item.description}</Text>
                                            <Text style={general.textNoteCard}>{item.created_at}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </Content>
                        <Text style={[general.textIstActive, general.marginTopBottom, general.paddingLR]}>
                            Gird
                        </Text>
                        <View style={[{margin: -5, marginBottom: 20}, general.paddingLR]}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                numColumns={3}
                                renderItem={({item}) =>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={[general.marginTopBottom, general.wrapperCenter, general.noMarginBottom]}>
                                        <View
                                            style={[general.imageSquareSmall, general.shadow]}
                                        >
                                            <Image
                                                resizeMode={'cover'}
                                                source={{uri: item.url}}
                                                style={general.imageSquareSmall}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                    </Content>
                );
            case 1:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={({item}) =>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{uri: item.url}}
                                        style={general.imageFeature}
                                    />
                                    <View style={[general.marginTop, general.wrapperCenterLeftToRightColumn]}>
                                        <Text style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                        <Text style={general.textDescriptionCard}>{item.description}</Text>
                                        <Text style={general.textNoteCard}>{item.created_at}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />

                    </Content>
                );
            case 2:
                return (
                    <Content style={{flex: 1}}>
                    </Content>
                );

        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {general, colors} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    barStyle={"light-content"}
                />
                <LinearGradient
                    colors={colors}
                    style={general.linearGradient}>
                    <View style={general.wrapperHeader}>
                        <Text style={[general.textTitleHeader]}>
                            KEETOOL
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <TouchableOpacity onPress={() => this.ViewDashboard()}>
                            <View style={
                                this.state.tab === 0
                                    ?
                                    general.wrapperMenuTextIsActive
                                    :
                                    general.wrapperMenuTextNotActive
                            }>
                                <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>Dashboard</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.ViewBlog()}>
                            <View style={
                                this.state.tab === 1
                                    ?
                                    general.wrapperMenuTextIsActive
                                    :
                                    general.wrapperMenuTextNotActive
                            }>

                                <Text
                                    style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>Blog</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.ViewCard()}>
                            <View style={
                                this.state.tab === 2
                                    ?
                                    general.wrapperMenuTextIsActive
                                    :
                                    general.wrapperMenuTextNotActive
                            }>

                                <Text
                                    style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>Cards</Text>

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
        general : state.theme.general,
        colors: state.theme.colors,
    }
}
export default connect(mapStateToProps)(HomeContainer);