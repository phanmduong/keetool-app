import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Image, Platform, ScrollView, StatusBar, RefreshControl,
} from 'react-native';
import {
    Container, Item, Left, Right, Spinner, Content
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../commons/Icon';
import HamburgerButton from '../../commons/HamburgerButton';
import * as color from '../../styles/colorDark';
import * as size from '../../styles/size';
import PercentageCircle from 'react-native-percentage-circle';
import {connect} from 'react-redux';

 class DashboardContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            feature: {
                "url": "https://images.unsplash.com/photo-1505906960586-b2f5793971ad?auto=format&fit=crop&w=707&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            chart: [
                12, 24, 6, 17, 21, 8, 70, 45, 80, 74, 64, 7, 43, 76, 23, 25, 31, 54, 17, 21, 8, 70, 45, 80, 74, 64, 7, 70, 45, 80, 74, 64, 7, 43, 76, 23, 25, 31, 54, 17, 21, 8, 70, 45, 80, 74,
            ],
            data:
                [

                    {
                        "url": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1501159873713-dc65286617cc?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1485436442739-c12c6e3673af?auto=format&fit=crop&w=553&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "THIS IS SAMPLE TEXT",
                        "description": "Sample description goes here",
                        "created_at": "24h ago"
                    },
                ]
        }
    }

    ViewDashboard() {
        this.setState({tab: 0})
    }

    ViewBlog() {
        this.setState({tab: 1})
    }

    ViewCard() {
        this.setState({tab: 2})
    }

    ShowTab() {
        const {general} = this.props;
        switch (this.state.tab) {
            case 0:
                return (
                    <Content
                        showsVerticalScrollIndicator={false}
                        style={{flex: 1}}>
                        {/*<ScrollView horizontal={true}>*/}
                        <View
                            style={[general.wrapperRevenue, general.paddingBottom, general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={general.marginBottom}>
                                <View style={{alignItems: 'flex-end', flexDirection: 'row'}}>
                                    {
                                        this.state.chart.map((item) => {
                                            return (
                                                <View
                                                    style={[general.columnChart, general.marginLR, {height: (item / 100) * (size.hei / 3 - 30), backgroundColor: '#FFFFFF'}]}/>
                                            )
                                        })
                                    }
                                </View>

                            </ScrollView>
                            <View style={general.line}/>
                            <View style={[general.wrapperBottomChart]}>
                                <Text style={[general.textChart, general.colorTextLight]}>+20%</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>Xem thêm</Text>
                                    <Icon
                                        name="fontawesome|chevron-circle-right"
                                        size={12}
                                        style={[general.iconStyle, general.colorTextLight]}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View
                                style={[general.wrapperRevenueSquare, general.paddingBottom, general.marginTopBottom, general.shadow, {backgroundColor: '#AA46E8'}]}>
                                <View style={[general.padding]}>
                                    <Text style={[general.textTitleChart, general.colorTextLight]}>Phân tích tỉ lệ</Text>
                                </View>
                                <View style={general.wrapperCenter}>
                                    <PercentageCircle
                                        radius={30}
                                        percent={60}
                                        innerColor={'#AA46E8'}
                                        bgcolor={color.textColorNotActive}
                                        color={color.textColor}
                                        borderWidth={7}
                                        children={<Text style={[general.textTitleChart, general.colorTextLight]}>60%</Text>}
                                    />
                                </View>
                                <View>
                                    <View style={general.line}/>
                                    <View style={[general.wrapperBottomChart]}>
                                        <Text style={[general.textChart, general.colorTextLight]}>+20%</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>Xem thêm</Text>
                                            <Icon
                                                name="fontawesome|chevron-circle-right"
                                                size={12}
                                                style={[general.iconStyle, general.colorTextLight]}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[general.wrapperRevenueSquare, general.paddingBottom, general.marginTopBottom, general.shadow, {backgroundColor: '#F57629'}]}>
                                <View style={[general.padding]}>
                                    <Text style={[general.textTitleChart, general.colorTextLight]}>Phân tích tỉ lệ</Text>
                                </View>
                                <View style={general.wrapperCenter}>
                                    <Text style={[general.textNumberChart, general.colorTextLight]}>+48%</Text>
                                </View>
                                <View>
                                    <View style={general.line}/>
                                    <View style={[general.wrapperBottomChart]}>
                                        <Text style={[general.textChart, general.colorTextLight]}>+20%</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>Xem thêm</Text>
                                            <Icon
                                                name="fontawesome|chevron-circle-right"
                                                size={12}
                                                style={[general.iconStyle, general.colorTextLight]}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={[general.wrapperRevenueLine, general.marginTopBottom, general.shadow]}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={[general.textTitleChart, general.colorTextLight]}>Doanh thu</Text>
                                <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>12.232.564.000đ</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>Xem thêm</Text>
                                <Icon
                                    name="fontawesome|chevron-circle-right"
                                    size={12}
                                    style={[general.iconStyle, general.colorTextLight]}
                                />
                            </View>
                        </View>
                        <View
                            style={[general.wrapperRevenueLine, general.marginTopBottom, general.shadow, {backgroundColor: '#F57629'}]}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={[general.textTitleChart, general.colorTextLight]}>Doanh thu</Text>
                                <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>12.232.564.000đ</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>Xem thêm</Text>
                                <Icon
                                    name="fontawesome|chevron-circle-right"
                                    size={12}
                                    style={[general.iconStyle, general.colorTextLight]}
                                />
                            </View>
                        </View>
                        <View
                            style={[general.wrapperRevenueLine, general.marginTopBottom, general.shadow, {backgroundColor: '#AA46E8'}]}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={[general.textTitleChart, general.colorTextLight]}>Doanh thu</Text>
                                <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>12.232.564.000đ</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={[general.textChart, general.marginLR, general.colorTextLight]}>Xem thêm</Text>
                                <Icon
                                    name="fontawesome|chevron-circle-right"
                                    size={12}
                                    style={[general.iconStyle, general.colorTextLight]}
                                />
                            </View>
                        </View>

                    </Content>
                );
            case 1:
                return (
                    <Content style={{flex: 1}}>
                    </Content>
                );
            case 2:
                return (
                    <Content style={{flex: 1}}>
                    </Content>
                );

        }
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
                            DASHBOARD
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>
                    <View style={general.wrapperMenuHome}>
                        <TouchableOpacity onPress={() => this.ViewDashboard()}>
                            <View style={
                                this.state.tab === 0
                                    ?
                                    general.wrapperMenuTextIsActive
                                    :
                                    general.wrapperMenuTextNotActive
                            }>
                                <Text style={this.state.tab === 0 ? general.textIstActive : general.textNotActive}>Dashboard</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.ViewBlog()}>
                            <View style={
                                this.state.tab === 1
                                    ?
                                    general.wrapperMenuTextIsActive
                                    :
                                    general.wrapperMenuTextNotActive
                            }>

                                <Text
                                    style={this.state.tab === 1 ? general.textIstActive : general.textNotActive}>Blog</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.ViewCard()}>
                            <View style={
                                this.state.tab === 2
                                    ?
                                    general.wrapperMenuTextIsActive
                                    :
                                    general.wrapperMenuTextNotActive
                            }>

                                <Text
                                    style={this.state.tab === 2 ? general.textIstActive : general.textNotActive}>Cards</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                    {this.ShowTab()}

                </LinearGradient>
            </Container>
        );
    }
}
function mapStateToProps(state){
    return{
        general : state.theme.general,
        colors: state.theme.colors
    }
}
export default connect(mapStateToProps)(DashboardContainer)