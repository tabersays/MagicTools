/**
 * Created by taber on 10/28/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../Constants';

const componentStyles = StyleSheet.create({
    image: {
        flex: 1,
        borderColor: constants.primary,
        borderWidth: 2,
        borderRadius: 5,
    },
    placeholder: {
        flex: 1
    },
    imageContainer: {
        flexDirection: 'row',
        //padding: 5,
        height: 200,
        marginHorizontal: 10
    }
});
export default class CardImagePlaceholder extends Component {
    render() {
        return (
            <View style={componentStyles.imageContainer}>
                <View style={componentStyles.image}>
                    <Text>Image</Text>
                </View>
            </View>
        )
    }
}

CardImagePlaceholder.propTypes = {};
