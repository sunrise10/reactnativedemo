import React, {Component} from 'react';
import {
    Text,
    View,
    AppRegistry, StyleSheet, SectionList, StatusBar, Image, FlatList, TouchableOpacity, TouchableNativeFeedback
} from 'react-native';

let Dimensions = require('Dimensions');//获取屏幕的宽高
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {provinces: []};
    }

    render() {
        return (
            <View>
                <StatusBar
                    animated={false} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'white'} //状态栏的背景色
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                />
                <View style={{flexDirection: 'row', height: 40, backgroundColor: "white"}}>
                    <Image source={require('../android/app/src/main/res/drawable-xxhdpi/back.png')}
                           style={styles.topArrow}/>
                    <Text style={{
                        fontSize: 16,
                        marginLeft: 20,
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }}>选择城市</Text>
                </View>
                <SectionList
                    keyExtractor={this.extraUniqueKey}
                    stickySectionHeadersEnabled={true}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderSectionHeader={this._sectionHeader}
                    getItemLayout={(data, index) => ({length: 50, offset: (51) * index, index})}
                    sections={this.state.provinces}/>
            </View>
        );
    }

    componentDidMount() {
        this.getProvince();
    }

    async getProvince() {
        try {
            /*let response = await fetch(url);
            let responseJson = await response.json();
            let provinceLetter = [];
            for (province of responseJson.data) {
                provinceLetter.con
                provinceLetter.contains(provinceLetter.firstLetter);
            }*/
            let response = await require('./province.json');
            let jsonData = response.data;
            console.info(response);
            this.setState({
                provinces: jsonData
            });
        } catch (error) {

        }
    }

    _sectionHeader = (info) => {
        if ("GPS定位城市" == info.section.key || "热门城市" == info.section.key) {
            return <View>
                <Text style={styles.itemHeader}>{info.section.key}</Text>
                <FlatList
                    style={{backgroundColor: '#edf0f4'}}
                    data={info.section.data}
                    numColumns={3}
                    keyExtractor={this.extraUniqueKey}
                    renderItem={({item}) =>
                        <View>
                            <Text style={styles.item1}>{item.title}</Text>
                        </View>

                    }
                />
            </View>
        } else {
            return <Text style={styles.itemHeader}>{info.section.key}</Text>
        }
    };
    _renderItem = (info, index) => {
        if ("GPS定位城市" == info.section.key || "热门城市" == info.section.key) {
            return null
        } else {
            return <TouchableNativeFeedback key={index} onPress={this.clickItem.bind(this, info.item, index)}>
                <View>
                    <Text style={styles.item}>{info.item.title}</Text>
                </View>
            </TouchableNativeFeedback>
        }
    };

    extraUniqueKey(item, index) {
        return "index" + index + item;
    }

    itemSeparator() {
        return <View style={styles.itemSeparator}/>;
    }

    clickItem(item, index) {
        //ToastAndroid.show('点击了' + item.name, ToastAndroid.SHORT);
    }
};

const
    styles = StyleSheet.create(
        {
            itemTitle: {
                fontSize: 20,
                textAlign: 'right'
            },
            itemContainer: {
                flexDirection: 'row',
                height: 40,
                marginLeft: 4,
                alignItems: 'center'
            },
            itemSeparator: {
                height: 0.5,
                backgroundColor: '#e1e1e1'
            },
            itemHeader: {
                paddingLeft: 10,
                textAlignVertical: 'center',
                height: 35,
                backgroundColor: '#edf0f4',
                color: '#878787',
                fontSize: 16
            },
            item: {
                paddingLeft: 10,
                height: 45,
                textAlignVertical: 'center',
                backgroundColor: "white",
                color: '#5C5C5C',
                fontSize: 16
            }, topArrow: {
                alignSelf: 'center',
                marginLeft: 20,
                height: 20,
                width: 20,
                resizeMode: 'contain'
            },
            viewRow: {
                backgroundColor: '#edf0f4',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 10,
            },
            item1: {
                marginBottom: 15,
                marginRight: 5,
                marginLeft: 10,
                height: 45,
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: "white",
                color: '#5C5C5C',
                fontSize: 16,
                width: ScreenWidth / 3.5
            }
        }
    );

