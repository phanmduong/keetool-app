import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import Loading from '../../commons/Loading';
import {connect} from 'react-redux';

class BookStoreContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            tab: 0,
            feature: {
                "url": "http://d1j8r0kxyu9tj8.cloudfront.net/images/1508747154YLAM6FbWs0m11rc.jpg",
                "title": "Book name here",
                "description": "Description goes here, a little bit long",
            },
            data:
                [
                    {
                        "url": "http://d1j8r0kxyu9tj8.cloudfront.net/images/1508089806bq6y2BCnoaQylnR.jpg",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Description goes here, a little bit long",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "http://arena.vn/wp-content/uploads/2013/06/23.jpg",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Description goes here, a little bit long",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "http://lh5.ggpht.com/_HYrNnpBwZAM/TOVAGWKWS2I/AAAAAAAAAUQ/RqlZs8fmWUM/3.jpg",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Description goes here, a little bit long",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "http://d2xbg5ewmrmfml.cloudfront.net/files/1511331424y9XrpZkQJ71W8GR.png",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Description goes here, a little bit long",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://a.wattpad.com/cover/124227785-352-k824360.jpg",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Description goes here, a little bit long",
                        "created_at": "24h ago"
                    },
                ]
        }
    }

    componentWillMount() {
        this.isLoading();
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 12200);
    }

    ViewKnowledge() {
        this.isLoading();
        this.setState({tab: 0})
    }

    ViewTravel() {
        this.isLoading();
        this.setState({tab: 1})
    }

    ViewComic() {
        this.isLoading();
        this.setState({tab: 2})
    }

    ShowTab() {
        const {general, colors} = this.props;
        const {isLoading} = this.state;
        switch (this.state.tab) {
            case 0:
                return (
                    <View>
                        {
                            this.state.data.map((item, i) =>
                                <TouchableOpacity key={i}
                                                  style={[general.marginTopBottom, general.wrapperCenterLeftToRightRow]}>
                                    <View
                                        style={[general.imageRectangleSmall, general.shadow]}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.url}}
                                            style={general.imageRectangleSmall}
                                        />
                                    </View>
                                    <View style={[general.marginLeft, general.wrapperCenterLeftToRightColumn]}>
                                        <Text style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                        <Text style={general.textDescriptionCard}>{item.description}</Text>
                                        <Text style={general.textNoteCard}>{item.created_at}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                );
            case 1:
                return (
                    <View>
                        {
                            this.state.data.map((item, i) =>
                                <TouchableOpacity key={i}
                                                  style={[general.marginTopBottom, general.wrapperCenterLeftToRightRow]}>
                                    <View
                                        style={[general.imageRectangleSmall, general.shadow]}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.url}}
                                            style={general.imageRectangleSmall}
                                        />
                                    </View>
                                    <View style={[general.marginLeft, general.wrapperCenterLeftToRightColumn]}>
                                        <Text style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                        <Text style={general.textDescriptionCard}>{item.description}</Text>
                                        <Text style={general.textNoteCard}>{item.created_at}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                );
            case 2:
                return (
                    <View>
                        {
                            this.state.data.map((item, i) =>
                                <TouchableOpacity key={i}
                                                  style={[general.marginTopBottom, general.wrapperCenterLeftToRightRow]}>
                                    <View
                                        style={[general.imageRectangleSmall, general.shadow]}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.url}}
                                            style={general.imageRectangleSmall}
                                        />
                                    </View>
                                    <View style={[general.marginLeft, general.wrapperCenterLeftToRightColumn]}>
                                        <Text style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                        <Text style={general.textDescriptionCard}>{item.description}</Text>
                                        <Text style={general.textNoteCard}>{item.created_at}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                );

        }
    }


    render() {
        const {feature, data} = this.state;
        const {navigate} = this.props.navigation;
        const {general, colors} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <LinearGradient
                    colors={colors}
                    style={general.linearGradient}>
                    <View style={general.wrapperHeader}>
                        <Text style={[general.textTitleHeader]}>
                            BOOK STORE
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <Content showsVerticalScrollIndicator={false}
                             style={general.wrapperFullWidth}
                    >
                        <View
                            style={[general.marginTopBottom, general.wrapperFeatureBook, general.paddingBottom, general.paddingLR]}>
                            <View style={[general.shadow, general.wrapperImageRectangle]}>
                                <Image
                                    resizeMode={'cover'}
                                    style={general.imageRectangle}
                                    source={{uri: feature.url}}
                                />
                            </View>
                            <View style={[general.marginLeft, {flex: 1}]}>
                                <Text style={general.textTitleHeader}>#1</Text>
                                <Text style={[general.textTitleGiant, general.paddingLine]}>OF THE WEEK</Text>
                                <Text style={general.textTitleBig}>{feature.title}</Text>
                                <Text style={general.textDescriptionCard}>{feature.description}</Text>
                            </View>
                        </View>
                        <Text style={[general.textIstActive, general.marginTopBottom, general.paddingLR]}>
                            We pick for you
                        </Text>
                        <Content style={{flex: 1}} showsHorizontalScrollIndicator={false}
                                 horizontal={true}
                        >
                            {
                                data.map((item, i) =>
                                    <TouchableOpacity key={i}
                                                      style={[general.wrapperImageRectangle, general.marginLeft, general.marginTopBottom, general.shadow]}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.url}}
                                            style={general.imageRectangle}
                                        />
                                        <Text style={[general.textTitleBig, general.marginTop]}>{feature.title}</Text>
                                        <Text style={general.textDescriptionCard}>{feature.description}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </Content>
                        <View style={[general.wrapperMenuHome, general.marginTopBottom, general.paddingLR]}>
                            <TouchableOpacity onPress={() => this.ViewKnowledge()}>
                                <View style={
                                    this.state.tab === 0
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>
                                    <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>Knowledge</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewTravel()}>
                                <View style={
                                    this.state.tab === 1
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>Travel</Text>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.ViewComic()}>
                                <View style={
                                    this.state.tab === 2
                                        ?
                                        general.wrapperMenuTextIsActive
                                        :
                                        general.wrapperMenuTextNotActive
                                }>

                                    <Text
                                        style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>Comic</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={general.paddingLR}>
                            {this.ShowTab()}
                        </View>
                    </Content>
                </LinearGradient>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        general: state.theme.general,
        colors: state.theme.colors,
    }
}

export default connect(mapStateToProps)(BookStoreContainer)