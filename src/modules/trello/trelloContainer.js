import React, {Component} from 'react';
import {Animated, FlatList, Modal, PanResponder, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Input, Item, Label, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import {connect} from 'react-redux'
import part from '../../styles/partStyle';
import DragAndDropContainer from './dragAndDropContainer'
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
                    text: "Tieu de 1",
                    data: ["1", "2", "3", "4", "4", "5"]
                },
                {
                    text: "Tieu de 2",
                    data: ["1", "3", "4", "7", "8", "9"]
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
                    <View style={{flex: 1}}>
                        <Content
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        >
                            {
                                this.state.List.map((item, i) => {
                                    return (
                                        <View {...this.panResponder.panHandlers}
                                              style={[general.wrapperItemTrello, {marginLeft: 20}]}>

                                            <View style={general.trelloCart}>
                                                <View style={[part.topModal, part.haveBorderBottom]}>
                                                    <Text style={part.titleBigDarkBold}>
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
                                                                 item = {item}
                                                               />
                                                            )
                                                        }}
                                                    >
                                                    </FlatList>
                                                </View>
                                                <View style={[part.bottomModal, part.haveBorderTop]}>
                                                    <Body>
                                                    <TouchableOpacity onPress={() => this.openModalAddCard(i)}>
                                                        <Text>Thêm thẻ </Text>
                                                    </TouchableOpacity>
                                                    </Body>
                                                </View>

                                            </View>
                                        </View>
                                    )
                                })
                            }
                            <View style={[general.wrapperItemTrello, {
                                marginLeft: 20,
                                marginTop: 20,
                                justifyContent: 'flex-start'
                            }]}>
                                <View style={[general.trelloCart, {height: 50}]}>
                                    <View style={[part.topModal, part.haveBorderBottom]}>
                                        <TouchableOpacity onPress={() => this.openModalAddList()}>
                                            <Text style={part.titleBigDarkBold}>Thêm công việc</Text>
                                        </TouchableOpacity>
                                    </View>
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
                        style={part.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={part.modalCart}>
                            <View style={[part.topModal, part.haveBorderBottom]}>
                                <Text style={part.titleBigDarkBold}>
                                    THÊM DANH SÁCH
                                </Text>
                            </View>
                            <View style={part.contentModal}>
                                <View>
                                    <Item>
                                        <Input
                                            onChangeText={(title) => {
                                                this.setState({title})
                                            }}
                                            placeholder="Thêm tiêu "
                                        />
                                    </Item>
                                </View>
                            </View>

                            <View style={[part.bottomModal, part.haveBorderTop]}>
                                <Body>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.addList(this.state.title)
                                    }}
                                >
                                    <Text style={part.textBigBlue}>Thêm</Text>
                                </TouchableOpacity>
                                </Body>
                            </View>
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
                        style={part.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={part.modalCart}>
                            <View style={[part.topModal, part.haveBorderBottom]}>
                                <Text style={part.titleBigDarkBold}>
                                    THÊM THẺ
                                </Text>
                            </View>
                            <View style={part.contentModal}>
                                <View>
                                    <Item>
                                        <Input
                                            onChangeText={(title) => {
                                                this.setState({title})
                                            }}
                                            placeholder="Thêm tiêu đề"
                                        />
                                    </Item>
                                </View>
                            </View>

                            <View style={[part.bottomModal, part.haveBorderTop]}>
                                <Body>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.addCardInOneItem(this.state.index, this.state.title)
                                    }}
                                >
                                    <Text style={part.textBigBlue}>Thêm</Text>
                                </TouchableOpacity>
                                </Body>
                            </View>
                        </View>
                    </View>
                </Modal>
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
