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
        marginHorizontal: 15,
        marginTop: 15,
        backgroundColor: constants.white
    },
    name: {
        flex: 3
    },
    type: {
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
