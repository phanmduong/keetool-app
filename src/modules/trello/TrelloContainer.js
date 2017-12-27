import React, {Component} from 'react';
import {Animated, FlatList, Modal, PanResponder, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Input, Item, Label, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import {connect} from 'react-redux'
import DragAndDropContainer from './DragAndDropContainer';
import SortableList from 'react-native-sortable-list';
class TrelloContainer extends Component {
    constructor() {
        super();
        this.state = {
            modalAddCard: false,
            modalAddList: false,
            modalEditItem : false,
            title: '',
            indexItem : 0,
            dropZoneValues : null,
            index: 0,
            List: [
                {
                    text: "Done",
                    data: ["HTML", "CSS", "Jquery", "JSON"]
                },
                {
                    text: "Doing",
                    data: ["PHP", "Laravel", "React", "GoLang"]
                },
                {
                    text: "This Week",
                    data: ["C++", "C", "C#", "Javascript"]
                },
                {
                    text: "Ideas",
                    data: ["Kotlin", "Android", "iOS", "React Native"]
                }
            ],
            edit : '',
        }
        this.openModalEditItem = this.openModalEditItem.bind(this);
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
                modalEditItem: false
            });
        }
    }
     setDropZoneValues(event){
         this.setState({
             dropZoneValues : event.nativeEvent.layout
         });
     }
    // updatePosition(indexList, data, e, order){
    //     let arr = [];
    //     let List = this.state.List;
    //     order.splice(e.to, 0, order.splice(e.from, 1)[0]);
    //     for (let i = 0; i<order.length; i++){
    //         arr.push(data[order[i]])
    //     }
    //     List[indexList].data = arr;
    //     console.log(arr);
    //     this.setState({List : List})
    // }



    setModalAddCard(visible) {
        this.setState({modalAddCard: visible});
    }

    setModalAddList(visible) {
        this.setState({modalAddList: visible});
    }
    setModalEditItem(visible){
        this.setState({modalEditItem : visible});
    }

    addList(text) {
        let list = {text: text, data: []};
        let List = this.state.List;
        List.push(list);
        this.setState({List: List})
        this.setModalAddList(false);
    }
     toObject(arr) {
        let rv = {};
        for (let i = 0; i < arr.length; ++i)
            rv[i] = arr[i];
        return rv;
    }

    addCardInOneItem(index, text) {
        let List = this.state.List;
        List[index].data.push(text);
        this.setState({List: List});
        this.setModalAddCard(false);
    }
    editItem(index, text){
        let List = this.state.List;
        List[index].data[this.state.indexItem] = text;
        this.setState({List : List});
        this.setModalEditItem(false)
    }

    openModalAddList() {
        this.setModalAddList(true);
    }

    openModalAddCard(index) {
        this.setModalAddCard(true);
        this.setState({index: index})
    }
    openModalEditItem(edit, key, index){
        this.setModalEditItem(true);
        this.setState({index : index});
        this.setState({edit : edit});
        let indexItem = Number(key);
        this.setState({indexItem : indexItem});
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
                                    let data = this.toObject(item.data);
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
                                                    <SortableList
                                                        style={[{ flex: 1, backgroundColor : 'rgb(192, 198, 209)'}]}

                                                        data={data}
                                                        renderRow={({data, active, index}) =>
                                                            {
                                                                let indexItem = Number(index);
                                                                return <DragAndDropContainer  indexItem = {indexItem} openModalEditItem = {this.openModalEditItem} item={data} active={active} index = {i} />
                                                        }} />
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

                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalEditItem}
                >
                    <View
                        style={general.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={general.modalCart}>
                            <View style={[general.headerModal, general.haveBorderBottom]}>
                                <Text style={general.textTitleCardDark}>
                                    Edit Item
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Item>
                                    <Input
                                        style={general.inputTheme}
                                        onChangeText={(edit) => {
                                            this.setState({edit})
                                        }}
                                        value = {this.state.edit}
                                    />
                                </Item>
                            </View>
                            <TouchableOpacity
                                style={[general.bottomModal, general.haveBorderTop]}
                                 onPress={() => {
                                     this.editItem(this.state.index, this.state.edit)
                                 }}
                            >
                                <Text style={general.textTitleCardBlue}>+ Edit</Text>
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
