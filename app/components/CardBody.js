/**
 * Created by taber on 10/29/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../Constants';

const componentStyles = StyleSheet.create({
    body: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: constants.primary,
        marginHorizontal: 10,
        flex: 1,
        marginBottom: 10
    }
});
export default class CardBody extends Component {
    render() {
        return (
            <View style={componentStyles.body}>
                <Text>Body</Text>
            </View>
        )
    }
}

CardBody.propTypes = {};
