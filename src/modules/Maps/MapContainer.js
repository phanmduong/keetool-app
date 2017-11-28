import React, {Component} from 'react';
import {Dimensions, Platform, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import part from '../../styles/partStyle';
import MapView from 'react-native-maps';
import Icon from '../../commons/Icon';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import Geocoder from 'react-native-geocoder';
import {Container, Content, Item, Left, Right, Spinner, Text, Body} from 'native-base';
import {hei, wid} from '../../styles/size';
const LATITUDE = 0.0922;
const {width, height} = Dimensions.get('window');
// const LONGITUDE = LATITUDE * DELTA;
export default class MapContainer extends Component {
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

    watchID: ?number = null;

    componentWillMount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
                let lat = parseFloat(position.coords.latitude);
                let long = parseFloat(position.coords.longitude);
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
                this.setState({Address: res[0].formattedAddress, streetName: res[0].streetName, country: res[0].country })
            })
                .catch(err => console.log(err))
        })

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
                            WIFI CHECKIN
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
                            <Text style={[part.titleSmallDarkBold, {fontSize: 15}]}>Địa điểm hiện tai </Text>
                            <Text style={[part.textPrice2, {fontSize: 15, padding: 5}]}>Address
                                : {this.state.Address}</Text>
                            <Text style={[part.textPrice2, {fontSize: 15, padding: 5}]}>streetName
                                : {this.state.streetName}</Text>
                        </View>
                        <View style={{marginTop: 15}}>
                            <Text style={[part.titleSmallDarkBold, {fontSize: 15}]}>Tên Wifi </Text>
                            <Text style={[part.textPrice2, {fontSize: 15, padding: 5}]}>country
                                : {this.state.country}</Text>
                        </View>
                    </View>
                    <View style={[part.bottomModal, {marginTop : 30}]}>
                        <Body>
                        <TouchableOpacity style={[part.buttonOrderInModal, {justifyContent: 'center', alignItems: 'center', height : 50, width : wid -20}]}
                        >
                            <Text style={[part.textBigLight]}>Check in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[part.buttonOrderInModal, {backgroundColor : color.gray ,height : 50, width : wid -20,justifyContent: 'center', alignItems: 'center', marginTop : 10}]}
                        >
                            <Text style={[part.textBigLight]}>Lịch sử điểm danh</Text>
                        </TouchableOpacity>
                        </Body>
                    </View>
                </View>


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