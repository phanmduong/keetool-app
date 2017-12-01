import React, {Component} from 'react';
import {Dimensions, Platform, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner, Text, Body} from 'native-base';
import MapView from 'react-native-maps';
import * as color from '../../styles/color';
import HamburgerButton from '../../commons/HamburgerButton';
import Geocoder from 'react-native-geocoder';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';


const LATITUDE = 0.01;
const {width, height} = Dimensions.get('window');
class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            markerPosition: {
                latitude: 0,
                longitude: 0,
            },
            streetNumber: '',
            streetName: '',
            country: '',
            locality: '',
            Address: '',
        }
    }

    watchID: ? number = null;

    componentWillMount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
                let lat = parseFloat(position.coords.latitude);
                let long = parseFloat(position.coords.longitude);
                // let lat = 21.0229925;
                // let long = 105.7993911;
                let initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE,
                    longitudeDelta: 0.0421
                }
                this.setState({initialPosition: initialRegion, markerPosition: initialRegion})
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 30000, maximumAge: 100}
        )
        this.watchID = navigator.geolocation.watchPosition((position) => {
            let lat = parseFloat(position.coords.latitude);
            let long = parseFloat(position.coords.longitude);
            // let lat = 21.0229925;
            // let long = 105.7993911;
            let lastRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE,
                longitudeDelta: 0.0421
            }
            let NY = {
                lat: lat,
                lng: long
            }
            this.setState({initialPosition: lastRegion, markerPosition: lastRegion});
            Geocoder.geocodePosition(NY).then(res => {
                console.log(res)
                this.setState({
                    Address: res[0].formattedAddress,
                    streetName: res[0].streetName,
                    country: res[0].country
                })
            })
                .catch(err => console.log(err))
        })

    }


    render() {
        const {navigate} = this.props.navigation;
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
                    <Content style={general.wrapperFullWidth}>
                        <View style={[styles.wrapperContainer, {marginTop: 20}]}>
                            <MapView
                                style={styles.map}
                                region={this.state.initialPosition}
                                onRegionChange={region => this.setState({initialPosition: region})}
                                onRegionChangeComplete={region => this.setState({initialPosition: region})}
                                followsUserLocation={true}
                            >
                                <MapView.Marker
                                    coordinate={this.state.markerPosition}
                                >
                                    <View style={styles.radius}>
                                        <View style={styles.marker}/>
                                    </View>
                                </MapView.Marker>
                            </MapView>
                            <View style={{marginTop: height / 3 + 20, marginLeft: 10}}>
                                <View>
                                    <Text style={general.textTitleCard}>Localization</Text>
                                    <Text style={general.textDescriptionCard}>Address
                                        : {this.state.Address}</Text>
                                    <Text style={general.textDescriptionCard}>Street Name
                                        : {this.state.streetName}</Text>
                                </View>
                                <View style={{marginTop: 15}}>
                                    <Text style={general.textTitleCard}>Wifi name</Text>
                                    <Text style={general.textDescriptionCard}>Country
                                        : {this.state.country}</Text>
                                </View>
                            </View>
                            <View style={general.marginTop}>
                                <Body>
                                <TouchableOpacity
                                    style={general.marginTop}
                                >
                                    <Text style={general.textTitleCard}>Check in</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={general.marginTop}
                                >
                                    <Text style={general.textTitleCard}>Attendance history </Text>
                                </TouchableOpacity>
                                </Body>
                            </View>
                        </View>
                    </Content>


                </LinearGradient>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        backgroundColor: color.none
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        bottom: 0,
        height: height / 3,
        width: width
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderColor: 'rgba(0, 122, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    marker: {
        height: 20,
        width: 20,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 5,
        backgroundColor: '#007AFF',
        borderColor: 'white'
    }

})

function mapStateToProps(state){
    return {
        general : state.theme.general,
        colors: state.theme.colors,
    }
}
export default connect(mapStateToProps)(MapContainer)