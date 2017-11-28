import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, Platform, Animated, StatusBar, RefreshControl,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import * as color from '../../styles/colorDark';
import * as size from '../../styles/size';
import {connect} from 'react-redux';
import * as colors from '../../styles/generalStyle';
import Video from 'react-native-video';

 class VideoPlayContainer extends Component {
    constructor() {
        super();
        this.state = {
            play: 1,
            duration: 0.0,
            currentTime: 0.0,
            minute: 0,
            second: 0,
            minuteDuration: 0,
            secondDuration: 0,
            temp: 0,
            paused: true,
            index: 0,
            data: [
                {
                    "url": "http://d1j8r0kxyu9tj8.cloudfront.net/videos/1510501494f219f070e733934d3194166dc1904071a266dd800cf53e7c1beb9bf53e6489a3.mp4"
                }
            ]
        }
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    toggleVideo() {
        if (this.state.paused === true) {
            this.setState({paused: false});
        } else {
            this.setState({paused: true});
        }
    }

    onLoad(data) {
        this.setState({duration: data.duration});
        let duration = parseInt(this.state.duration);
        if (this.state.duration > 0) {
            this.setState({
                minuteDuration: parseInt(duration / 60),
                secondDuration: parseInt(duration % 60),
            })
        }
    }

    onProgress(data) {
        this.setState({currentTime: data.currentTime});
        let second = parseInt(this.state.currentTime);
        if (data.currentTime <= data.currentTime) {
            this.setState({
                minute: parseInt(second / 60),
                second: parseInt(second % 60),
            })
        } else {
            this.setState({
                minute: 0,
                second: 0,
                paused: true
            })
        }
    }

    onEnd() {
        this.setState({
            minute: 0,
            second: 0,
            paused: true
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        const {play, paused} = this.state;
        const {general, colors} = this.props;
        let temp = this.state.currentTime == 0 || this.state.duration == 0 ? 0 : this.state.currentTime / this.state.duration;
        let widthDeadlineProgress = (size.wid - 20) * temp;
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
                            VIDEO PLAYER
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
                    <Text style={general.textTitleCard}>Video name here</Text>
                    <Text style={general.textDescriptionCard}>Description goes here, a little bit long</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[general.wrapperImageFullWidth, general.marginTopBottom, general.shadow, {marginTop: 20}]}
                        onPress={() => this.toggleVideo()}
                    >
                        <Video
                            rate={play}                              // 0 is paused, 1 is normal.
                            volume={1.0}                            // 0 is muted, 1 is normal.
                            muted={false}                           // Mutes the audio entirely.
                            paused={paused}                          // Pauses playback entirely.
                            resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                            repeat={true}                           // Repeat forever.
                            playInBackground={false}                // Audio continues to play when app entering background.
                            playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                            ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                            progressUpdateInterval={250.0}
                            source={{uri: this.state.data[0].url}}
                            style={general.imageFullWidth}
                            onLoad={this.onLoad}    // Callback when video loads
                            onProgress={this.onProgress}    // Callback every ~250ms with currentTime
                            onEnd={this.onEnd}
                        />
                        <TouchableOpacity
                            style={[
                                general.wrapperButtonPlayInVideo,
                                this.state.paused
                                    ?
                                    '' : {display: 'none'}]}
                            onPress={() => this.toggleVideo()}
                        >
                            <Icon
                                name={this.state.paused ? "entypo|controller-play" : "entypo|controller-paus"}
                                size={40}
                                style={[general.iconStyle, this.state.paused ? {paddingLeft: 5} : '']}
                            />
                            <View style={{position: 'absolute', bottom: 5}}>
                                <TouchableOpacity style={{paddingTop: 10}}
                                                  activeOpacity={1}
                                >
                                    <View style={general.wrapperDeadline}>
                                        <View
                                            style={[general.deadlineProgress, {width: widthDeadlineProgress}]}>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={[general.wrapperRowSpaceBetween, {marginTop: 5}]}>
                                    <Text style={[general.textNoteCard, {color: color.textColor}]}>
                                        {this.state.minute}:{this.state.second < 10 ? '0' : ''}{this.state.second}
                                    </Text>
                                    <Text style={[general.textNoteCard, {color: color.textColor}]}>
                                        {parseInt(this.state.duration / 60)}:{parseInt(this.state.duration % 60) < 10 ? '0' : ''}{parseInt(this.state.duration % 60)}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={general.wrapperRowSpaceBetween}>
                        <View style={general.wrapperRowCenter}>
                            <Image
                                resizeMode={'cover'}
                                source={{uri: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}
                                style={general.imageCircleTiny}
                            />
                            <Text style={[general.textDescriptionCard, general.marginLeft]}>AUTHOR NAME</Text>
                        </View>
                        <View style={general.wrapperRowCenter}>
                            <Icon
                                name="fontawesome|star"
                                size={size.iconBig}
                                style={general.iconStarStyle}
                            />
                            <Icon
                                name="fontawesome|star"
                                size={size.iconBig}
                                style={general.iconStarStyle}
                            />
                            <Icon
                                name="fontawesome|star"
                                size={size.iconBig}
                                style={general.iconStarStyle}
                            />
                            <Icon
                                name="fontawesome|star"
                                size={size.iconBig}
                                style={general.iconStarStyle}
                            />
                            <Icon
                                name="fontawesome|star"
                                size={size.iconBig}
                                style={general.iconStarStyle}
                            />
                        </View>
                    </View>
                    <Text style={[general.textIstActive, general.marginTopBottom, {paddingTop: 20}]}>
                        Comments
                    </Text>
                    <View style={general.line}/>

                </LinearGradient>
            </Container>
        );
    }
}
function mapStateToProps(state){
     return {
         general : state.theme.general,
         colors: state.theme.colors,
     }
}
export default connect(mapStateToProps)(VideoPlayContainer)