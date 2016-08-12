/**
 * Created by taber on 7/17/2016.
 */
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class CircleButton extends Component {
    render() {
        const componentStyle = {
            circle: {
                borderRadius: 50,
                width: 50,
                height: 50,
                backgroundColor: this.props.color || '#FFC0CB',
                justifyContent: 'center',
                alignItems: 'center'
            },
        };
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={this.props.style}>
                <View
                    style={componentStyle.circle}>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        );
    }
}