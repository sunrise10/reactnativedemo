import React, {Component} from 'react';
import {Image} from 'react-native';

export default class BottomIcon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tintColor: props.tintColor,
            focused: props.focused,
            normalIcon: props.normalIcon,
            selectedIcon: props.selectedIcon,
        };
    }

    render() {
        return (
            <Image source={this.state.focused ? this.state.selectedIcon : this.state.normalIcon}
                   style={{width: 25, height: 25}}/>
        );
    }
};

