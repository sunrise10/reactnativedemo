import React, {Component} from 'react';
import {
    Text,
    View,
    AppRegistry, StyleSheet
} from 'react-native';

import {TabNavigator} from 'react-navigation';
import MainPage from "../page/MainPage";

export default class Tab extends Component {
    render() {
        return (

        );
    }
};

const styles = StyleSheet.create(
    {
        container: {}
    }
);

const TabNavg = TabNavigator(
    {
        MainPage: {
            screen: MainPage,
            navigationOptions:{
                tabBarIcon:
            }
        }
    }
);


