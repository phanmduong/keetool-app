import React, {Component} from 'react';
import {Animated, FlatList, Modal, PanResponder, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Input, Item, Label, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import {connect} from 'react-redux'
import DragAndDropContainer from './DragAndDropContainer';

class TrelloContainer extends Component {
    constructor() {
        super();
        this.state = {
            modalAddCard: false,
            modalAddList: false,
            title: '',
            index: 0,
            List: [
                {
                    text: "Done",
                    data: ["Design landing page", "Party"]
                },
                {
                    text: "Doing",
                    data: ["1", "3", "4", "7"]
                },
                {
                    text: "This Week",
                    data: ["1", "2", "3", "4"]
                },
                {
                    text: "Ideas",
                    data: ["1", "3", "4", "7"]
                }
            ]
        }
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
                modalAddList: false,
                modalAddCard: false,
            });
        }
    }

    setModalAddCard(visible) {
        this.setState({modalAddCard: visible});
    }

    setModalAddList(visible) {
        this.setState({modalAddList: visible});
    }

    addList(text) {
        let list = {text: text, data: []};
        let List = this.state.List;
        List.push(list);
        this.setState({List: List})
        this.setModalAddList(false);
    }

    addCardInOneItem(index, text) {
        let List = this.state.List;
        List[index].data.push(text);
        this.setState({List: List});
        this.setModalAddCard(false);
    }

    openModalAddList() {
        this.setModalAddList(true);
    }

    openModalAddCard(index) {
        this.setModalAddCard(true);
        this.setState({index: index})
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
                            JOBS
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
                    <View style={general.wrapperFullWidth}>
                        <Content
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        >
                            {
                                this.state.List.map((item, i) => {
                                    return (
                                        <View
                                            style={[general.wrapperCenter, general.marginLeftFar, general.shadow]}>
                                            <View style={general.trelloCart}>
                                                <View style={[general.headerModal, general.haveBorderBottom]}>
                                                    <Text style={general.textTitleCardDark}>
                                                        {item.text}
                                                    </Text>
                                                </View>
                                                <View style={general.contentTrello}>
                                                    <FlatList
                                                        data={item.data}
                                                        extraData={this.state}
                                                        renderItem={({item}) => {
                                                            return (
                                                                <DragAndDropContainer
                                                                    item={item}
                                                                />
                                                            )
                                                        }}
                                                    />
                                                </View>
                                                <View style={[general.bottomModal, general.haveBorderTop]}>
                                                    <TouchableOpacity onPress={() => this.openModalAddCard(i)}
                                                                      style={general.bottomModal}>
                                                        <Text style={general.textTitleCardBlue}>+ Add Task</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                            <View style={[general.wrapperItemTrello, general.marginLeftFar, general.shadow]}>
                                <View style={[general.trelloCart, general.wrapperCenter]}>
                                    <TouchableOpacity onPress={() => this.openModalAddList()}>
                                        <Text style={general.textTitleBigBlue}>+ Add Category</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Content>
                    </View>
                </LinearGradient>
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalAddList}
                >
                    <View
                        style={general.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={general.modalCart}>
                            <View style={[general.headerModal, general.haveBorderBottom]}>
                                <Text style={general.textTitleCardDark}>
                                    ADD CATEGORY
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Item>
                                    <Input
                                        style={general.inputTheme}
                                        onChangeText={(title) => {
                                            this.setState({title})
                                        }}
                                        placeholder="Title"
                                    />
                                </Item>
                            </View>
                            <TouchableOpacity
                                style={[general.bottomModal, general.haveBorderTop]}
                                onPress={() => {
                                    this.addList(this.state.title)
                                }}
                            >
                                <Text style={general.textTitleCardBlue}>+ Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalAddCard}
                >
                    <View
                        style={general.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={general.modalCart}>
                            <View style={[general.headerModal, general.haveBorderBottom]}>
                                <Text style={general.textTitleCardDark}>
                                    Add Card
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Item>
                                    <Input
                                        style={general.inputTheme}
                                        onChangeText={(title) => {
                                            this.setState({title})
                                        }}
                                        placeholder="Title"
                                    />
                                </Item>
                            </View>
                            <TouchableOpacity
                                style={[general.bottomModal, general.haveBorderTop]}
                                onPress={() => {
                                    this.addCardInOneItem(this.state.index, this.state.title)
                                }}
                            >
                                <Text style={general.textTitleCardBlue}>+ Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        colors: state.theme.colors,
        general: state.theme.general,
    }
}

export default connect(mapStateToProps)(TrelloContainer)
