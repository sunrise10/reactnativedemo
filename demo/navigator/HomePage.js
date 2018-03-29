import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';

import PageScreen1 from './Page1';
import PageScreen2 from './Page2';

class HomePage extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', backgroundColor: '#acacac', marginTop: 10, height: 120.5}}>
                    <Image source={require('../../img/icon_avert.png')}
                           style={{width: 40, height: 40, marginLeft: 10, marginTop: 14,}}/>

                    <View style={{flexDirection: 'column', alignSelf: 'center', marginStart: 12}}>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 18, color: '#303030'}}>王健林</Text>
                            <Text style={{fontSize: 14, color: '#303030', marginTop: 4, marginLeft: 3}}>总经理</Text>
                            <Text style={{fontSize: 11, color: '#303030', marginLeft: 30}}>02 - 22 11：30 </Text>
                        </View>

                        <Text style={{fontSize: 14, color: '#8C8E97'}}>中投昆泰北京资产管理有有限公司 </Text>
                        <Text style={{fontSize: 11, color: '#303030', marginTop: 3}}>就 大宗出让-恒生电子[600750]
                            你与Ta电话联系过 </Text>

                        <View style={{flexDirection: 'row', marginTop: 11}}>
                            <View style={{
                                borderWidth: 1,
                                borderRadius: 4,
                                borderColor: '#FF7300',
                                width: 60.5,
                                height: 20
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#FF7300',
                                    textAlign: 'center',
                                    paddingTop: 1
                                }}>虚拟电话</Text>
                            </View>
                            <View style={{
                                borderWidth: 1,
                                borderRadius: 4,
                                marginLeft: 16,
                                borderColor: '#4879FF',
                                width: 60.5,
                                height: 20
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#4879FF',
                                    textAlign: 'center',
                                    paddingTop: 1
                                }}>加好友</Text>
                            </View>
                        </View>

                    </View>

                    <Image source={require('../../img/call_out.png')}
                           style={{width: 49.7, height: 37.6, position: 'absolute', right: 0}}/>
                </View>
                <View style={styles.container}>
                    <Button
                        color='#ffa361'
                        title="点此查看省市区"
                        onPress={() => this.props.navigation.navigate('Page1')}
                    />
                </View>

                <View style={{position: 'absolute', bottom: 40, left: 20}}>
                    <Button
                        color='#ffa361'
                        title="tab"
                        onPress={() => this.props.navigation.navigate('Page2')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'column',
            position: 'absolute', bottom: 40, right: 20
        },
        text: {
            fontSize: 20,
            color: '#FF7300'
        }
    }
);

const BackStack = StackNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                header: null
            },
        },
        Page1: {
            screen: PageScreen1,
            navigationOptions: {
                header: null,
            },
        },
        Page2: {
            screen: PageScreen2,
            navigationOptions: {
                header: null,
                gesturesEnabled: true,
            }
        }
    }, {
        initialRouteName: 'HomePage',
        headerMode: 'screen',
    }
);

export default class RootStack extends Component {
    render() {
        return (
            <BackStack/>
        );
    }
}
