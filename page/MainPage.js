import React, {Component} from 'react';
import {
    Text,
    View,
    AppRegistry, StyleSheet
} from 'react-native';

export default class MainPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, color: '#4879FF'}}>首页</Text>
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

AppRegistry.registerComponent('styles', () => MainPage);
