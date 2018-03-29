import React, {Component} from 'react';
import {Text, View, Image, StyleSheet,StatusBar} from 'react-native';
import FilmedPage from "./Filmed";
import FilmingPage from "./Filming";
import {TabNavigator} from "react-navigation";

export default class MainPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={false} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'white'} //状态栏的背景色
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                >
                </StatusBar>
                <View style={styles.top}>
                    <Text style={styles.locationText}>杭州</Text>
                    <Image source={require('../android/app/src/main/res/drawable-xxhdpi/arrow_down.png')}
                           style={styles.topArrow}/>
                    <View style={styles.topSearchContainer}>
                        <Image source={require('../android/app/src/main/res/drawable-xxhdpi/top_search.png')}
                               style={styles.topSearch}/>
                        <Text style={styles.topSearchText}>电影 / 电视剧 / 影人</Text>
                    </View>
                </View>
                <TopNavigator/>
            </View>
        );
    }
};

const TopNavigator = TabNavigator(
    {
        FilmingPage: {
            screen: FilmingPage,
            navigationOptions: {
                tabBarLabel: '正在热映',
            }
        },
        FilmedPage: {
            screen: FilmedPage,
            navigationOptions: {
                tabBarLabel: '即将上映',
            }
        }
    }, {
        initialRouteName: 'FilmingPage',
        tabBarPosition: 'top',
        tabBarVisible: true,
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: '#666666',
            inactiveTintColor: '#838383',
            showLabel: true,
            indicatorStyle: {
                height: 2,
                backgroundColor: '#666666'
            },
            style: {
                backgroundColor: 'white',
            },
            labelStyle: {
                fontSize: 14,
            },
        },
    }
);

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'white'
        },
        top: {
            height: 50,
            flexDirection: 'row',
            alignItems: 'center'
        },
        locationText: {
            marginLeft: 15,
            fontSize: 16,
            color: '#666666'
        },
        topArrow: {
            marginLeft: 3,
            height: 12,
            width: 10,
            resizeMode: 'contain'
        },
        topSearchContainer: {
            flex: 1,
            flexDirection: 'row',
            height: 35,
            padding: 3,
            marginRight: 20,
            marginLeft: 4,
            backgroundColor: '#f3f3f3',
            borderRadius: 5,
            justifyContent:'center'
        },
        topSearchText: {
            fontSize: 14,
            color: '#a7a7a7',
            alignSelf: 'center'
        },
        topSearch: {
            alignSelf: 'center',
            marginRight: 3,
            height: 16,
            width: 16,
            resizeMode: 'contain'
        },
    }
);
