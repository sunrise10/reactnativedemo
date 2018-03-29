import React, {Component} from 'react';
import {ActivityIndicator,StatusBar, FlatList, Image, StyleSheet, Text, View} from 'react-native';

let filmingUri = 'https://api.douban.com/v2/movie/coming_soon';
let starring = "";
let start = 0, count = 10;
export default class Filmed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmed: [],
            refreshing: false,
            loadMore: false,
            showFoot: 2,
        };
    }

    render() {
        let itemData = this.state.filmed;
        if (itemData.length != 0) {
            return (
                <View>
                    <FlatList data={itemData}
                              showsVerticalScrollIndicator={false}
                              renderItem={this.itemLayout.bind(this)}
                              keyExtractor={this.extraUniqueKey}
                              ItemSeparatorComponent={this.itemSeparator}
                              getItemLayout={(data, index) => ({length: 160, offset: (161) * index, index})}
                              onRefresh={this.onRefresh}
                              refreshing={this.state.refreshing}
                              onEndReached={this.handleLoadMore}
                              onEndReachedThreshold={1}
                              ListFooterComponent={this._renderFooter.bind(this)}
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.loading}>
                    <Image source={require('../android/app/src/main/res/drawable-xxhdpi/load6.png')}
                           style={{resizeMode: 'center'}}/>
                </View>
            )
        }
    }

    getStarring(item) {
        starring = "";
        if (item.casts.length == 0) {
            starring = "无";
        } else {
            for (names of item.casts) {
                starring = starring + names.name + "/"
            }
            starring = starring.substring(0, starring.length - 1)
        }
    };

    getRating(item) {
        return item.rating.average == 0 ? "暂无评分" : "评分：" + item.rating.average;
    }

    getDirectors(item) {
        return item.directors.length == 0 ? "导演：暂无" : "导演：" + item.directors[0].name;
    }

    itemLayout({item}) {
        this.getStarring(item);
        return (
            <View style={styles.itemContainer}>
                <Image source={{uri: item.images.large}} style={styles.moviesImages}/>
                <View style={{flex: 1}}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemStar}>{this.getRating(item)}</Text>
                    <Text style={styles.itemStar}>{this.getDirectors(item)}</Text>
                    <Text style={styles.itemStar}>主演：{starring}</Text>
                    <Text style={styles.itemCount}>{item.collect_count} 人想看</Text>
                </View>
            </View>
        )
    }

    itemSeparator() {
        return <View style={styles.itemSeparator}/>;
    }

    extraUniqueKey(item, index) {
        return "index" + index + item;
    }

    onRefresh = () => {
        console.info("onRefresh");
        this.setState({
            refreshing: true,
        });
        start = 0;
        this.getFilming();
    };

    handleLoadMore = () => {
        console.info("loadMore");
        this.setState({
            loadMore: true,
            showFoot: 2
        });
        start += 10;
        let timer = setTimeout(() => {
            clearTimeout(timer);
            this.getFilming();
        }, 500)
    };

    _renderFooter() {
        if (this.state.showFoot === 1) {
            return (
                <View style={{height: 30, alignItems: 'center', justifyContent: 'flex-start',}}>
                    <Text style={{color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5,}}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if (this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator/>
                    <Text style={{marginLeft: 10, fontSize: 15, color: '#666666'}}>正在加载更多电影...</Text>
                </View>
            );
        } else if (this.state.showFoot === 0) {
            return null;
        }
    }

    async getFilming() {
        try {
            let response = await fetch(filmingUri + '?start=' + start + '&count=' + count);
            let resopnseJson = await response.json();
            console.info(response);
            this.setState({
                filmed: (this.state.refreshing ? resopnseJson.subjects : this.state.filmed.concat(resopnseJson.subjects)),
                refreshing: false,
                loadMore: false,
                showFoot: 0,
            });
        } catch (error) {
            callback(error);
        }
    }

    componentDidMount() {
        this.getFilming();
    }
};

const styles = StyleSheet.create(
    {
        loading: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        loadtext: {
            fontSize: 30,
            color: '#4879FF'
        },
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        itemSeparator: {
            height: 1,
            backgroundColor: '#f6f6f6'
        },
        moviesImages: {
            margin: 10,
            height: 140,
            width: 100
        },
        itemContainer: {
            flexDirection: 'row',
        },
        itemTitle: {
            marginTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#4a4a4a'
        },
        itemStar: {
            fontSize: 12,
            color: '#a7a7a7'
        },
        itemCount: {
            fontSize: 14,
            color: '#ff8a4a'
        },
        footer: {
            flexDirection: 'row',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
);
