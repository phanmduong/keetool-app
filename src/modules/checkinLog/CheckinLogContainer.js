import React, {Component} from 'react';

import {Platform, StatusBar, TouchableOpacity, View} from 'react-native';
import part from '../../styles/partStyle';
import Icon from '../../commons/Icon';
import {CardItem, Container, Content, Item, Left, Right, Spinner, Text} from 'native-base';
import * as color from '../../styles/color';
import * as size from '../../styles/size';

export default class CheckinLogContainer extends Component {
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
                            CHECKIN LOG
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
                    <View
                        avatar
                        style={[part.backgroundNone, part.noMarginLeft, part.padding, part.haveBorderBottom, {flexDirection: 'row'}]}>
                       <View style={{
                           justifyContent: 'flex-start',
                       }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height : 20,
                            width : 20,
                            backgroundColor: color.main,
                            marginRight : 5
                        }}>
                            <Icon
                                name="fontawesome|play"
                                color={color.navTitle}
                                size={7}
                            />
                        </View>
                       </View>
                        <View style={{marginTop: -6}}>
                            <Text style={[part.titleLargeDarkBold, {fontSize: 20, padding: 3}]}>CHECKOUT</Text>
                            <Text style={[part.titleLargeDarkBold, {fontSize: 13, padding: 3}]}>colorME Family</Text>
                            <Text style={[part.titleLargeDarkBold, {fontSize: 13, padding: 3}]}>175 Chùa Láng </Text>
                            <Text style={[part.titleLargeDarkBold, {fontSize: 13, padding: 3}]}>22h:00:00 Thứ 6 ngày 13
                                tháng 3 năm 2017</Text>
                        </View>
                        <View style={{
                            justifyContent: 'flex-start',
                            marginLeft : -60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height : 20,
                                width : 100,
                                backgroundColor: color.green,
                                borderRadius : 5,
                            }}>
                                <Text style = {[part.textBigLight, {fontSize : 10}]}>Successed</Text>
                            </View>
                        </View>

                    </View>
                </View>


            </Container>
        )
    }
}