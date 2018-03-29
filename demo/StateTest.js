import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props)
        this.state = {changeText: true}

        setInterval(() => {
            this.setState({changeText: !this.state.changeText});
        }, 1000)
    }

    render() {
        let display = this.state.changeText ? this.props.guess : this.props.and;
        return (
            <Text>{display}</Text>
        );
    }
}

export default class StateTest extends Component {
    render() {
        return (
            <View>
                <Blink guess='猜猜我是谁'/>
                <Blink and='哈哈哈哈'/>
            </View>
        );
    }
}

AppRegistry.registerComponent('StateTest', () => StateTest);