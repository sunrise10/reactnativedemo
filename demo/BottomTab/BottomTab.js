import React from 'react';
import {Image, AppRegistry, StyleSheet} from 'react-native';

import {TabNavigator} from 'react-navigation';
import MainPage from "../../page/MainPage";
import DiscoverPage from "../../page/Discover";
import PublishPage from "../../page/Publish";
import ContactPage from "../../page/Contact";
import MyPage from "../../page/My";

const BottomNavigator = TabNavigator(
    {
        MainPage: {
            screen: MainPage,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({tintColor, focused}) => (
                    <Image
                        source={focused ? require('../../img/icon_home_selected.png') : require('../../img/icon_home.png')}
                        style={styles.tab}/>
                ),
            }
        },
        DiscoverPage: {
            screen: DiscoverPage,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: ({focused}) => (
                    <Image
                        source={focused ? require('../../img/icon_discover_selected.png') : require('../../img/icon_discover.png')}
                        style={styles.tab}
                    />
                ),
            }
        },
        PublishPage: {
            screen: PublishPage,
            navigationOptions: {
                tabBarLabel: '发布',
                tabBarIcon: (focused) => (
                    <Image
                        source={focused ? require('../../img/icon_publish.png') : require('../../img/icon_publish.png')}
                        style={styles.publish}/>
                ),
            }
        },
        ContactPage: {
            screen: ContactPage,
            navigationOptions: {
                tabBarLabel: '人脉',
                tabBarIcon: ({focused}) => (
                    <Image
                        source={focused ? require('../../img/icon_contacts_selected.png') : require('../../img/icon_contacts.png')}
                        style={styles.tab}/>
                ),
            }
        },
        MyPage: {
            screen: MyPage,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused}) => (
                    <Image
                        source={focused ? require('../../img/icon_me_selected.png') : require('../../img/icon_me.png')}
                        style={styles.tab}/>
                ),
            }
        }
    }, {
        initialRouteName: 'MainPage',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: '#4879FF',
            inactiveTintColor: 'black',
            showIcon: true,
            showLabel: true,
            indicatorStyle: {
                height: 0
            },
            style: {
                backgroundColor: '#ffffff',
                height: 60
            },
            labelStyle: {
                fontSize: 12,
            },
            pressOpacity: 0.8,
        },
    }
);

export default class RootStack extends React.Component {
    render() {
        return (
            <BottomNavigator/>
        );
    }
}


const styles = StyleSheet.create(
    {
        tab: {
            width: 25,
            height: 25,
            resizeMode: 'contain'
        },
        publish: {
            width: 25,
            height: 25,
            resizeMode: 'contain'
        }
    }
);

AppRegistry.registerComponent('BottomTab', () => BottomTab);


