/**
 * Created by taber on 10/29/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../Constants';

const componentStyles = StyleSheet.create({
    type: {
        borderWidth: 2,
        borderColor: constants.primary,
        marginHorizontal: 15,
        borderRadius: 5,
        backgroundColor: constants.white
    }
});
export default class CardType extends Component {
    render() {
        return (
            <View style={componentStyles.type}>
                <Text>Type</Text>
            </View>
        )
    }
}

CardType.propTypes = {};
