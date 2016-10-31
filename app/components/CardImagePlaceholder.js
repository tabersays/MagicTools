/**
 * Created by taber on 10/28/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../Constants';
import autobind from 'autobind-decorator';

const componentStyles = StyleSheet.create({
    image: {
        flex: 1,
        borderColor: constants.primary,
        borderWidth: 2,
        borderRadius: 5,
    },
    imageContainer: {
        flexDirection: 'row',
        height: 200,
        marginHorizontal: 15,
        backgroundColor: constants.white
    }
});

@autobind
export default class CardImagePlaceholder extends Component {
    render() {
        return (
            <View style={componentStyles.imageContainer}>
                <View style={componentStyles.image}/>
            </View>
        )
    }
}

CardImagePlaceholder.propTypes = {};
