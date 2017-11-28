import React, {Component} from 'react';

import {Image, Platform, StatusBar, TouchableOpacity, View} from 'react-native';
import part from '../../styles/partStyle';
import Icon from '../../commons/Icon';
import {Body, CardItem, Container, Content, Item, Left, Right, Spinner, Text} from 'native-base';
import * as color from '../../styles/color';
import * as size from '../../styles/size';

export default class ResultQRCodeContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <StatusBar
                    backgroundColor={color.main}
                    barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"}
                />
                {
                    Platform.OS === 'ios'
                        ?
                        <View style={part.wrapperStatusBarNoPadding}>
                        </View>
                        :
                        <View/>
                }
                <View>
                    <Item style={[part.noBorder, {paddingLeft: 15}]}>
                        <Text style={[part.titleLargeDarkBold, part.paddingLineFar]}>
                            QR CODE
                        </Text>
                        <Right style={part.paddingRight}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                            >
                                <Icon
                                    name="materialCommunity|menu"
                                    color={color.text}
                                    size={size.iconGiant}
                                    style={part.padding}
                                />
                            </TouchableOpacity>
                        </Right>
                    </Item>
                </View>
                <View style={{marginTop: 30}}>
                    <View style={[part.wrapperItemBook]}>
                        <View style={[part.wrapperTextInItemBook]}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[part.titleLargeDarkBold, {fontSize: 16, padding: 5}]}>QUÉT THÀNH
                                    CÔNG </Text>
                                <Icon
                                    name="fontawesome|check-circle"
                                    color={color.green}
                                    size={21}
                                />
                            </View>
                            <Text
                                style={[part.titleSmallDarkBold, {fontSize: 13, padding: 5}]}>Tên sản pham </Text>
                            <Text style={[part.titleSmallDarkBold, {fontSize: 13, padding: 5}]}>Graphics
                            </Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text
                                    style={[part.titleSmallDarkBold, {fontSize: 13, padding: 5}]}>150.000đ</Text>
                                <Text style={part.textCategoryInBook}
                                      numberOfLines={1}>-20%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={part.wrapperImageInItemBook}>
                        <Image
                            resizeMode={'cover'}
                            style={part.imageInItemBook}
                            source={{uri: "http://vietart.co/blog/wp-content/uploads/2014/01/3_thiet_ke_bia_sach_dep_20.jpg"}}
                        />
                    </View>
                </View>
                <View style={[part.bottomModal, {marginTop: 200}]}>
                    <Body>
                    <TouchableOpacity
                        style={[part.buttonOrderInModal, {justifyContent: 'center', alignItems: 'center'}]}
                    >
                        <Text style={[part.textBigLight]}>Thanh toán </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[part.buttonOrderInModal, {
                        backgroundColor: color.gray,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }]}
                    >
                        <Text style={[part.textBigLight]}>Quét tiep </Text>
                    </TouchableOpacity>
                    </Body>
                </View>
            </Container>
        )
    }
}