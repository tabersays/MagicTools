/**
 * Created by taber on 10/28/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardHeader from './CardHeader';
import CardImagePlaceholder from './CardImagePlaceholder';
import CardType from './CardType';
import CardBody from './CardBody';
import constants from '../Constants';
import autobind from 'autobind-decorator';

const componentStyle = StyleSheet.create({
    outerCard: {
        borderColor: constants.primary,
        borderWidth: 5,
        borderRadius: 5
    }
});

@autobind
export default class SearchCard extends Component {
    getBackgroundColor() {
        const colors = {
            black: 'dimgrey',
            blue: 'lightblue',
            red: 'orangered',
            white: 'white',
            green: 'lightgreen',
            multicolor: 'lightgoldenrodyellow',
            colorless: 'gainsboro'
        };
        return {backgroundColor: colors.colorless}
    }
    render() {
        const {style} = this.props;
        return (
            <View style={[componentStyle.outerCard, style, this.getBackgroundColor()]}>
                <CardHeader/>
                <CardImagePlaceholder/>
                <CardType/>
                <CardBody/>
            </View>
        );
    }
}