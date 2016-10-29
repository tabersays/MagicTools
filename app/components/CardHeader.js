/**
 * Created by taber on 10/28/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../Constants';

const componentStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 35,
        justifyContent: 'center',
        borderColor: constants.primary,
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 10
    },
    name: {
        borderStyle: 'solid',
        flex: 3
    },
    type: {
        borderLeftColor: constants.primary,
        borderLeftWidth: 2,
        flex: 1
    }
});
export default class CardHeader extends Component {
    render() {
        return (
            <View style={componentStyles.header}>
                <Text style={componentStyles.name}>Header</Text>
                <Text style={componentStyles.type}>Color</Text>
            </View>
        )
    }
}

CardHeader.propTypes = {};
