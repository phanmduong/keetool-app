import React, {Component} from 'react';
import {FlatList, PanResponder, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import {connect} from 'react-redux'

class TrelloContainer extends Component {
    constructor() {
        super();
        this.state = {
            List: [],
            modalAddCard: false,
            modalAddList: false,
        }
    }

    componentWillMount() {
        this.props.detailBookAction.detailBook(this.props.navigation.state.params.id);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({
                modalCart: false,
                modalInfoCart: false,
                modalBuySuccess: false,
            });
        }
    }

    setModaAddCard(visible) {
        this.setState({modalAddCard: visible});
    }

    setModalAddList(visible) {
        this.setState({modalAddList: visible});
    }

    addList() {

    }

    addCardInOneItem() {

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
                            Trello
                        </Text>
                        <Right>
                            <TouchableOpacity
                                onPress={() => navigate('DrawerOpen')}>
                                <Icon
                                    name="materialCommunity|menu"
                                    size={30}
                                    style={general.iconStyle}
                                />
                            </TouchableOpacity>
                        </Right>
                    </View>
                    {/*<ScrollView*/}
                        {/*showsHorizontalScrollIndicator={false}*/}
                        {/*horizontal={true}>*/}
                        {/*{this.state.List.map((item) => {*/}
                            {/*return (*/}
                                {/*<FlatList*/}
                                    {/*style {{marginLeft: 20}}*/}
                                    {/*data={item}*/}
                                    {/*renderItem={({itemInCard}) =>*/}
                                        {/*<Text>{itemInCard.name}</Text>*/}
                                    {/*}*/}
                                    {/*extraData={this.state}*/}
                                {/*/>*/}
                            {/*)*/}
                        {/*})}*/}
                    {/*</ScrollView>*/}
                </LinearGradient>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        general: state.theme.general,
        colors: state.theme.colors
    }
}

export default connect(mapStateToProps)(TrelloContainer)
