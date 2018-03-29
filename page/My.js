import React, {Component} from 'react';
import {
    Text,
    View,
    AppRegistry, StyleSheet
} from 'react-native';

export default class My extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, color: '#E35B5A'}}>我的</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
);

AppRegistry.registerComponent('styles', () => My)

