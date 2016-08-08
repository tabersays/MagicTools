/**
 * Created by taber on 7/17/2016.
 */
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const componentStyle = {
    square: {
        borderRadius: 5,
        width: 100,
        height: 100,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    }
};
export default class Counter extends Component {
    render() {
        return (
            <TouchableOpacity
                onLongPress={this.props.onLongPress}
                style={this.props.style}>
                <View
                    style={[componentStyle.square, this.props.style]}>
                    <Text style={componentStyle.text}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}