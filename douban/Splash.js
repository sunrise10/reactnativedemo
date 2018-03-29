import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Image, InteractionManager, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import MainPage from "./MainPage";
import Discover from "./Discover";
import Mine from "./Mine";

export default class Splash extends Component {

    componentDidMount() {
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                SplashScreen.hide();
            })
        }, 500);
    }

    constructor(props) {
        super(props);
        this.state = {selectedTab: '热映'};
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '热映'}
                    title="热映"
                    renderIcon={() => <Image
                        source={require('../android/app/src/main/res/drawable-xxhdpi/tab_movies_normal.png')}
                        style={styles.tab}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../android/app/src/main/res/drawable-xxhdpi/tab_movies_selected.png')}
                        style={styles.tab}/>}
                    onPress={() => this.setState({selectedTab: '热映'})}>
                    <MainPage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '找片'}
                    title="找片"
                    renderIcon={() => <Image
                        source={require('../android/app/src/main/res/drawable-xxhdpi/tab_discover_normal.png')}
                        style={styles.tab}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../android/app/src/main/res/drawable-xxhdpi/tab_discover_selected.png')}
                        style={styles.tab}/>}
                    onPress={() => this.setState({selectedTab: '找片'})}>
                    <Discover/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '我的'}
                    title="我的"
                    renderIcon={() => <Image
                        source={require('../android/app/src/main/res/drawable-xxhdpi/tab_mine_normal.png')}
                        style={styles.tab}/>}
                    renderSelectedIcon={() => <Image
                        source={require('../android/app/src/main/res/drawable-xxhdpi/tab_mine_selected.png')}
                        style={styles.tab}/>}
                    onPress={() => this.setState({selectedTab: '我的'})}>
                    <Mine/>
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
        }
    }
);

