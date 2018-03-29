import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

let url = 'https://facebook.github.io/react-native/movies.json'

export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null
        };
    }

    render() {
        let item = this.state.movies
        if (item) {
            return this.show(item)
        } else {
            return (
                <Text>加载中。。。</Text>
            )
        }
    }

    getMovies() {
        fetch(url).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    movies: responseJson
                })
            }).catch((error) => {
            console.error(error)
        });
    }

    show(item) {
        return (
            <Text>{item.title}</Text>
        )
    }

    componentDidMount() {
        this.getMovies();
    }
}

AppRegistry.registerComponent('FetchTest', () => FetchTest)