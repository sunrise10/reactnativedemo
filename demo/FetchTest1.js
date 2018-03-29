import React, {Component} from 'react';
import {
    Text,
    View, FlatList, TouchableNativeFeedback, ToastAndroid,
    AppRegistry, StyleSheet
} from 'react-native';

let url = 'https://api.it120.cc/common/region/province';
let url1 = 'https://api.it120.cc/common/region/child';

export default class FetchTest1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: null,
            cityData: null
        };
    }

    render() {
        let itemData = this.state.datas;
        if (itemData) {
            return (
                <View>
                    <FlatList data={itemData.data}
                              renderItem={this.itemLayout.bind(this)}
                              keyExtractor={this.extraUniqueKey}
                              ItemSeparatorComponent={this.itemSeparator}
                              getItemLayout={(data, index) => ({length: 50, offset: (51) * index, index})}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.loding}>
                    <Text style={styles.loadtext}>加载中...</Text>
                </View>
            )
        }
    }

    getProvince() {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    datas: responseJson
                })
            })
            .catch((error) => {
                callback(error)
            });
    }

    async getCity(id) {
        try {
            let response = await fetch(url1 + '?pid=' + id);
            let responseCity = await response.json();
            this.setState({datas: responseCity});
            if (responseCity.code != 0) {
                this.getProvince();
            }
        } catch (error) {
            callback(error)
        }
    }


    itemLayout({item, index}) {
        return (
            <TouchableNativeFeedback key={index} onPress={this.clickItem.bind(this, item, index)}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    clickItem(item, index) {
        this.getCity(item.id);
        //ToastAndroid.show('点击了' + item.name, ToastAndroid.SHORT);
    }

    _keyExtractor = (item, index) => index;

    extraUniqueKey(item, index) {
        return "index" + index + item;
    }

    itemSeparator() {
        return <View style={styles.itemSeparator}/>;
    }

    header() {
        return (
            <View>
                <Text style={{fontSize: 25}}>省市区</Text>
            </View>
        )
    }

    componentDidMount() {
        this.getProvince()
    }
};

const styles = StyleSheet.create(
    {
        container: {},
        loding: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        loadtext: {
            fontSize: 30,
            color: '#4879FF'
        },
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
            height: 1,
            backgroundColor: '#e1e9ff'
        }
    }
);

AppRegistry.registerComponent('styles', () => FetchTest1);

