import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../commons/HamburgerButton';
import {connect} from 'react-redux'
import Loading from '../../commons/Loading';

class BaseContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false
        }
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    ViewBasesList() {
        this.isLoading();
        this.setState({tab: 0})
    }

    ViewBasesRoomList() {
        this.isLoading();
        this.setState({tab: 1})
    }

    ShowTab() {
        const {general, colors, bases, rooms} = this.props;
        const {isLoading} = this.state;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                bases.map((item, i) =>
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
                                            <Text style={general.textTitleCard}>{item.name.toUpperCase()}</Text>
                                            <Text style={general.textDescriptionCard}>{item.address}</Text>
                                            <Text style={general.textNoteCard}>{item.created_at}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                        }
                        <View style={general.wrapperBottomModule}/>
                    </Content>
                );
            case 1:
                return (
                    <Content style={{flex: 1, padding: 20}}>
                        {
                            isLoading
                                ?
                                <Loading/>
                                :
                                rooms.map((item, i) =>
                                    <TouchableOpacity
                                        key={i}
                                        activeOpacity={0.8}
                                        style={[general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                                        <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.url}}
                                            style={[general.imageFeature]}
                                        />
                                        <View style={[general.marginTop, general.wrapperCenterLeftToRightColumn]}>
                                            <Text style={general.textTitleCard}>{item.name.toUpperCase()}</Text>
                                            <Text style={general.textDescriptionCard}>{item.address}</Text>
                                            <Text style={general.textNoteCard}>{item.base_name}</Text>
                                        </View>
                                    </TouchableOpacity>
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