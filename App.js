/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image, AppRegistry, StyleSheet, TextInput, ScrollView, FlatList
} from 'react-native';

/*class App extends Component {
    render() {
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        return (
            <View>
                <Text>hello {this.props.name}</Text>
                <Image source={pic} style={{width: 193, height: 110}}/>
            </View>
        );
    }
}*/

export default class App extends Component {
    render() {
        return (
            /*<ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>*/
            <View style={styles.container}>
                <FlatList
                    data={[{key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},]} renderItem={({item}) => <Text style={styles.item}>{item.key} </Text>}/>
            </View>
        );
    }
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: 22
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },

    }
);

AppRegistry.registerComponent('styles', () => App)

