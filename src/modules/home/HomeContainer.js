import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View,} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import Loading from '../../commons/Loading';
import * as size from '../../styles/size';
import {connect} from 'react-redux'


class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false,
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

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    ViewDashboard() {
        this.isLoading();
        this.setState({tab: 0});
    }

    ViewBlog() {
        this.isLoading();
        this.setState({tab: 1})
    }

    ViewCard() {
        this.isLoading();
        this.setState({tab: 2})
    }

    ShowTab() {
        const {data, general} = this.props;
        const {isLoading} = this.state;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content
                        showsVerticalScrollIndicator={false}
                        style={{flex: 1}}
                    >
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                <View>
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
                                        data={data}
                                        renderItem={({item}) =>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                style={item == data[0] ? [general.wrapperImageSquare, general.marginTopBottom, general.shadow, general.marginLeftFar] : [general.wrapperImageSquare, general.marginTopBottom, general.shadow, general.marginLeft]}>
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
                                        {
                                            data.map((item, i) =>
                                                <TouchableOpacity
                                                    key={i}
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
                                                    <View
                                                        style={[general.marginLeft, general.wrapperCenterLeftToRightColumn]}>
                                                        <Text
                                                            style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                                        <Text
                                                            style={general.textDescriptionCard}>{item.description}</Text>
                                                        <Text style={general.textNoteCard}>{item.created_at}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )}

                                    </Content>
                                    <Text style={[general.textIstActive, general.marginTopBottom, general.paddingLR]}>
                                        Grid
                                    </Text>
                                    <View style={[{marginBottom: 20}, general.paddingLR]}>
                                        <FlatList
                                            showsVerticalScrollIndicator={false}
                                            data={data}
                                            numColumns={3}
                                            renderItem={({item}) =>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    style={[general.marginTopBottom, general.wrapperCenter, general.noMarginBottom, general.marginRight]}>
                                                    <Image
                                                        resizeMode={'cover'}
                                                        source={{uri: item.url}}
                                                        style={general.imageSquareSmall}
                                                    />
                                                </TouchableOpacity>
                                            }
                                        />
                                    </View>
                                    <View style={general.wrapperBottomModule}/>
                                </View>

                        }
                    </Content>
                );
            case 1:
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
                                        data.map((item, i) =>
                                            <TouchableOpacity
                                                key={i}
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
                                        )
                                    }

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
                                <View></View>
                        }
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
        general: state.theme.general,
        colors: state.theme.colors,
        data: state.home.data,
    }
}

export default connect(mapStateToProps)(HomeContainer);