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
import {connect} from 'react-redux'
import Video from 'react-native-video';

 class MusicPlayContainer extends Component {
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
            paused: false,
            index: 0,
            data: [
                {
                    name: "Tell me you love me",
                    author: "Bolbbalgan4",
                    image_url: "https://pm1.narvii.com/6293/531883af0dc41be3265afc5253519a7dba0c054a_hq.jpg",
                    audio_url: "https://api.soundcloud.com/tracks/298911457/stream?client_id=X212L4OU3ILVpQRkDAfgWuT206gb0fmp"
                },
                {
                    name: "We Don't Talk Anymore",
                    author: "Charlie Puth",
                    image_url: "https://www.metro.us/sites/default/files/styles/mystyle/public/main/articles/2016/10/05/900Charlie-Puth-Credit-Jimmy-Fontaine-Color-horizontal_1.jpg",
                    audio_url: "https://api.soundcloud.com/tracks/260563288/stream?client_id=X212L4OU3ILVpQRkDAfgWuT206gb0fmp"
                },
                {
                    name: "Havana",
                    author: "Camila Cabello",
                    image_url: "http://img.wennermedia.com/article-leads-horizontal/camila-cabello-debut-album-755871a9-3783-475d-9ccf-394686fdb61d.jpg",
                    audio_url: "https://api.soundcloud.com/tracks/338700692/stream?client_id=X212L4OU3ILVpQRkDAfgWuT206gb0fmp"

                }
            ]
        }
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.progressPress = this.progressPress.bind(this);
    }

    toggleMusic() {
        if (this.state.paused === true) {
            this.setState({paused: false});
        } else {
            this.setState({paused: true});
        }
    }

    nextSong(){
        if(this.state.index < 2) {
            this.setState({
                index: this.state.index + 1,
                currentTime: 0.0,
                minute: 0,
                second: 0,
            })
        } else {
            this.setState({
                index: 0,
                currentTime: 0.0,
                minute: 0,
                second: 0,
            })
        }


    }
    previousSong(){
        if(this.state.index > 0){

            this.setState({
                index: this.state.index - 1,
                currentTime: 0.0,
                minute: 0,
                second: 0,
            })
        } else {
            this.setState({
                index: 3,
                currentTime: 0.0,
                minute: 0,
                second: 0,
            })
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
    onEnd(){
        this.setState({
            minute: 0,
            second: 0,
            paused: true
        })
    }
    progressPress(e){
        const position = e.nativeEvent.locationX
        const progress = ((position)/(size.wid - 20)) * this.state.duration
        this.player.seek(progress)
    }
    render() {
        const {data, index, play, paused} = this.state;
        const {navigate} = this.props.navigation;
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
                            MUSIC PLAYER
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
                    <View
                        style={[general.wrapperImageSquareBig, general.marginTopBottom, general.shadow]}>
                        <Image
                            resizeMode={'cover'}
                            source={{uri: data[index].image_url}}
                            style={general.imageSquareBig}
                        />
                        <View style={[general.wrapperTextInImage, general.wrapperCenterLeftToRightRow]}>
                            <View style={general.wrapperCenterLeftToRightColumn}>
                                <Text style={[general.textTitleBig]}>{data[index].name}</Text>
                                <Text style={general.textDescriptionCard}>{data[index].author}</Text>
                            </View>
                            <Icon
                                name="fontawesome|star"
                                size={size.iconGiant}
                                style={general.iconStarStyle}
                            />
                        </View>
                    </View>
                    <View style={[general.wrapperCenterRow]}>
                        <TouchableOpacity
                            style={general.wrapperButtonNext}
                            onPress={() => this.previousSong()}
                        >
                            <Icon
                                name="entypo|controller-fast-backward"
                                size={25}
                                style={[general.iconStyle, {paddingRight: 3}]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[general.wrapperButtonPlay]}
                            onPress={() => this.toggleMusic()}
                        >
                            <Icon
                                name={this.state.paused ? "entypo|controller-play" : "entypo|controller-paus"}
                                size={40}
                                style={[general.iconStyle, this.state.paused ? {paddingLeft: 5} : '']}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[general.wrapperButtonNext]}
                            onPress={() => this.nextSong()}
                        >
                            <Icon
                                name="entypo|controller-fast-forward"
                                size={25}
                                style={[general.iconStyle, {paddingLeft: 3}]}
                            />
                        </TouchableOpacity>
                    </View>
                    <Video
                        ref={(ref) => {
                            this.player = ref
                        }}
                        source={{uri: data[index].audio_url}}   // Can be a URL or a local file.
                        rate={play}                              // 0 is paused, 1 is normal.
                        volume={1}                            // 0 is muted, 1 is normal.
                        muted={false}                           // Mutes the audio entirely.
                        paused={paused}                          // Pauses playback entirely.
                        repeat={true}                           // Repeat forever.
                        playInBackground={false}                // Audio continues to play when app entering background.
                        playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                        ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                        progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                        onLoad={this.onLoad}    // Callback when video loads
                        onProgress={this.onProgress}    // Callback every ~250ms with currentTime
                        onEnd={this.onEnd}
                        style={{backgroundColor:color.none}}
                    />
                    <View style={general.wrapperProgress}>
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
                            <Text style={general.textNoteCard}>
                                {this.state.minute}:{this.state.second < 10 ? '0' : ''}{this.state.second}
                            </Text>
                            <Text style={general.textNoteCard}>
                                {parseInt(this.state.duration / 60)}:{parseInt(this.state.duration % 60) < 10 ? '0' : ''}{parseInt(this.state.duration % 60)}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        general : state.theme.general,
        colors: state.theme.colors,
    }
}
export default connect(mapStateToProps)(MusicPlayContainer)