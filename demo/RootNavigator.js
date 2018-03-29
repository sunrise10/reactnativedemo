import React, {Component} from 'react';

import FirstScreen from '../navigatorPages/FirstScreen'
import SecondScreen from '../navigatorPages/SecondScreen'

import {StackNavigator} from 'react-navigation'

export default class RootNavigator extends Component {
    render() {
        return (
            <RootStack/>
        );
    }
};

const RootStack = StackNavigator(
    {
        FirstPage: {
            screen: FirstScreen,
        },
        SecondPage: {
            screen: SecondScreen,
        }
    }, {
        initialRouteName: 'FirstPage'
    }
);

