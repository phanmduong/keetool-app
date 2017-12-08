import React, {Component} from 'react';
import {Linking, Platform, StyleSheet, TouchableOpacity, View, StatusBar} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Container, Content, Item, Left, Right, Spinner, Text} from 'native-base';
import {connect} from 'react-redux';
import HamburgerButton from '../../commons/HamburgerButton';
import LinearGradient from 'react-native-linear-gradient';

class QRcodeContainer extends Component {
    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }

    render() {
        const {goBack, navigate} = this.props.navigation;
        const {general, colors} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <LinearGradient
                    colors={colors}
                    style={general.linearGradient}>
                    <View style={general.wrapperHeader}>
                        <Text style={[general.textTitleHeader]}>
                            WIFI CHECKIN
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperFullWidth}>
                        <View style={general.marginTop}>
                            <QRCodeScanner onRead={this.onSuccess.bind(this)}/>
                        </View>
                        <View style={styles.buttonQR}>
                            <TouchableOpacity style={styles.buttonTouchable}>
                                <View style={styles.radius}>
                                    <View style={styles.marker}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </Container>

        );
    }
}

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

function mapStateToProps(state) {
    return {
        general: state.theme.general,
        colors: state.theme.colors,
    }
}

export default connect(mapStateToProps)(QRcodeContainer)