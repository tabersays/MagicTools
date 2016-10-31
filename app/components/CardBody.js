/**
 * Created by taber on 10/29/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../Constants';
import autobind from 'autobind-decorator';

const componentStyles = StyleSheet.create({
    body: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: constants.primary,
        marginHorizontal: 15,
        flex: 1,
        marginBottom: 15,
        backgroundColor: constants.white
    }
});

@autobind
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
