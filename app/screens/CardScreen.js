/**
 * Created by taber on 10/30/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import constants from '../Constants';
const {width} = Dimensions.get('window');
import autobind from 'autobind-decorator';

const componentStyles = StyleSheet.create({
    screen: {
        marginTop: 56,
        backgroundColor: constants.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: width * (3/5),
        height: width * (3/5) * 2,
        resizeMode: 'contain'
    }
});

@autobind
export default class CardScreen extends Component {
    render() {
        const {imageUrl} = this.props;
        return (
            <View style={componentStyles.screen}>
                <Image style={componentStyles.card}
                       source={{uri: imageUrl}}/>
            </View>
        )
    }
}

CardScreen.propTypes = {
    imageUrl: PropTypes.string
};
