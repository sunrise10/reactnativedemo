import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

let filmingUri = 'https://api.douban.com/v2/movie/in_theaters';
let starring = "";
export default class Filming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filming: null,
            refreshing: false
        };
    }

    render() {
        let itemData = this.state.filming;
        if (itemData) {
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
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.loading}>
                    <Image source={require('../android/app/src/main/res/drawable-xxhdpi/load6.png')}
                           style={{resizeMode: 'center'}}/>
                </View>
            )
        }
    }

    itemLayout({item}) {
        this.getStarring(item);
        return (
            <View style={styles.itemContainer}>
                <Image source={{uri: item.images.large}} style={styles.moviesImages}/>
                <View style={{flex: 1}}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemStar}>{this.getRating(item)}</Text>
                    <Text style={styles.itemStar}>导演：{item.directors[0].name}</Text>
                    <Text style={styles.itemStar}>主演：{starring}</Text>
                    <Text style={styles.itemCount}>{item.collect_count} 人已看</Text>
                </View>
            </View>
        );
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


    itemSeparator() {
        return <View style={styles.itemSeparator}/>;
    }

    extraUniqueKey(item, index) {
        return "index" + index + item;
    }

    onRefresh = () => {
        console.info("onRefresh");
        this.setState({refreshing: true});
        this.getFilming()
    };

    async getFilming() {
        try {
            let response = await fetch(filmingUri + "?city=118172");
            let resopnseJson = await response.json();
            console.info(response);
            this.setState({
                filming: (resopnseJson.subjects),
                refreshing: false
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
            alignItems: 'center',
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
            color: '#a7a7a7',
        },
        itemCount: {
            fontSize: 14,
            color: '#ff1518'
        }
    }
);
