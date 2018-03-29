import React, {Component} from 'react';
import {
    Text, View, Image,
    AppRegistry, StyleSheet
} from 'react-native';

let url = 'http://7nb.com.cn/api/user/contact/phone/list?page=0&size=2';

export default class FetchTest2 extends Component {
    constructor(props) {
        super(props);
        this.state = {callRecords: null};
    }

    render() {
        let item = this.state.callRecords;
        if (item) {
            return (
                this.showItem(item)
            )
        } else {
            return (
                <View style={styles.loding}>
                    <Text>加载中.......</Text>
                </View>
            )
        }
    }

    getCallRecord() {
        fetch(url, {
            method: 'get',
            headers: {
                'Client-Type': 1,
                'm-token': 'bf942cfc-eee9-46e1-afef-deb72b40a93c'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({callRecords: responseJson})
            })
            .catch((error) => callback(error))
    }

    async getCall() {
        try {
            let response = await fetch(url, {
                method: 'get',
                headers: {
                    'Client-Type': 1,
                    'm-token': 'bf942cfc-eee9-46e1-afef-deb72b40a93c'
                }
            });
            let responseJson = await response.json();
            this.setState({callRecords: responseJson});
        } catch (error) {
            callback(error)
        }
    }

    componentDidMount() {
        this.getCallRecord();
    }

    showItem(item) {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#acacac',
                marginTop: 20,
                height: 120.5,
            }}>
                <Image source={{uri: item.data.userList[0].icon}}
                       style={{width: 40, height: 40, marginLeft: 10, marginTop: 14}}/>

                <View style={{flexDirection: 'column', alignSelf: 'center', marginStart: 12}}>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 18, color: '#303030'}}>{item.data.userList[0].name}</Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#303030',
                            marginTop: 4,
                            marginLeft: 3
                        }}>{item.data.userList[0].position}</Text>
                        <Text style={{fontSize: 11, color: '#303030', marginLeft: 30}}>02 - 22 11：30</Text>
                    </View>

                    <Text style={{fontSize: 14, color: '#8C8E97'}}>{item.data.userList[0].company}</Text>
                    <Text style={{
                        fontSize: 11,
                        color: '#303030',
                        marginTop: 3
                    }}>就 {item.data.userList[0].productName} 你与Ta电话联系过 </Text>

                    <View style={{flexDirection: 'row', marginTop: 11}}>
                        <View
                            style={{borderWidth: 1, borderRadius: 4, borderColor: '#FF7300', width: 60.5, height: 20}}>
                            <Text
                                style={{fontSize: 11, color: '#FF7300', textAlign: 'center', paddingTop: 1}}>虚拟电话</Text>
                        </View>
                        <View style={{
                            borderWidth: 1,
                            borderRadius: 4,
                            marginLeft: 16,
                            borderColor: '#4879FF',
                            width: 60.5,
                            height: 20
                        }}>
                            <Text
                                style={{fontSize: 11, color: '#4879FF', textAlign: 'center', paddingTop: 1}}>加好友</Text>
                        </View>
                    </View>

                </View>

                <Image source={require('./img/call_out.png')}
                       style={{width: 49.7, height: 37.6, position: 'absolute', right: 0}}/>
            </View>
        )
    }
};

const styles = StyleSheet.create(
    {
        loding: {
            flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'
        }
    }
);

AppRegistry.registerComponent('styles', () => FetchTest2)

