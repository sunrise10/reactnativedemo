import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import MainPage from '../../page/MainPage'
import Discover from '../../page/Discover'
import Publish from '../../page/Publish'
import Contact from '../../page/Contact'
import My from '../../page/My'

export default class Page2 extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: '首页'};
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '首页'}
                    title="首页"
                    renderIcon={() => <Image source={require('../../img/icon_home.png')} style={styles.tab}/>}
                    renderSelectedIcon={() => <Image source={require('../../img/icon_home_selected.png')}
                                                     style={styles.tab}/>}
                    onPress={() => this.setState({selectedTab: '首页'})}>
                    <MainPage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '发现'}
                    title="发现"
                    renderIcon={() => <Image source={require('../../img/icon_discover.png')} style={styles.tab}/>}
                    renderSelectedIcon={() => <Image source={require('../../img/icon_discover_selected.png')}
                                                     style={styles.tab}/>}
                    onPress={() => this.setState({selectedTab: '发现'})}>
                    <Discover/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '发布'}
                    title="发布"
                    renderIcon={() => <Image source={require('../../img/icon_publish.png')} style={styles.publish}/>}
                    renderSelectedIcon={() => <Image source={require('../../img/icon_publish.png')}
                                                     style={styles.publish}/>}
                    onPress={() => this.setState({selectedTab: '发布'})}>
                    <Publish/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '人脉'}
                    title="人脉"
                    renderIcon={() => <Image source={require('../../img/icon_contacts.png')} style={styles.tab}/>}
                    renderSelectedIcon={() => <Image source={require('../../img/icon_contacts_selected.png')}
                                                     style={styles.tab}/>}
                    onPress={() => this.setState({selectedTab: '人脉'})}>
                    <Contact/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '我的'}
                    title="我的"
                    renderIcon={() => <Image source={require('../../img/icon_me.png')} style={styles.tab}/>}
                    renderSelectedIcon={() => <Image source={require('../../img/icon_me_selected.png')}
                                                     style={styles.tab}/>}
                    onPress={() => this.setState({selectedTab: '我的'})}>
                    <My/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
};

const styles = StyleSheet.create(
    {
        tab: {
            width: 25,
            height: 25,
            resizeMode: 'contain'
        },
        publish: {
            width: 30,
            height: 30,
            resizeMode: 'contain'
        }
    }
);
