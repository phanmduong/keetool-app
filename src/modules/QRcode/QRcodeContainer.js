
import React, {Component} from 'react';

import {Linking, Platform, StyleSheet, TouchableOpacity, View, StatusBar} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import part from '../../styles/partStyle';
import Icon from '../../commons/Icon';
import {Container, Content, Item, Left, Right, Spinner, Text} from 'native-base';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
class QRcodeContainer extends Component {
    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }

    render() {
        const {goBack, navigate} = this.props.navigation;
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
                    <QRCodeScanner onRead={this.onSuccess.bind(this)}/>
                </View>
                <View style={styles.buttonQR}>
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <View style={styles.radius}>
                            <View style={styles.marker}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </Container>

        );
    }
}

export default QRcodeContainer;
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        backgroundColor: 'rgb(224, 29, 15)',
        borderColor: 'rgba(224, 29, 15, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    marker: {
        height: 40,
        width: 40,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 2,
        backgroundColor: 'rgb(224, 29, 15)',
        borderColor: 'white',
    },
    buttonQR: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 350,
    }
});

