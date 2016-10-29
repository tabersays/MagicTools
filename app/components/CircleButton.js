/**
 * Created by taber on 10/16/2016.
 */
import React, {Component, PropTypes} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import constants from '../Constants';

const componentStyles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: constants.accent,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class CircleButton extends Component {
    render() {
        const {children, onPress, style} = this.props;
        return (
            <TouchableOpacity
                style={[componentStyles.circle, style]}
                onPress={onPress}>
                {children}
            </TouchableOpacity>
        );
    }
}

CircleButton.propType = {
    onPress: PropTypes.func,
    style: TouchableOpacity.propTypes.style,
    children: PropTypes.any
};