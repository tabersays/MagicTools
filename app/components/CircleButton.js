/**
 * Created by taber on 10/16/2016.
 */
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import constants from '../Constants';

const componentStyles = {
    circle: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: constants.accent,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

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