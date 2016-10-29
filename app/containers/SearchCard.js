/**
 * Created by taber on 10/28/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardHeader from '../components/CardHeader';
import CardImagePlaceholder from '../components/CardImagePlaceholder';
import CardType from '../components/CardType';
import CardBody from '../components/CardBody';
import constants from '../Constants';

const componentStyle = StyleSheet.create({
    outerCard: {
        borderColor: constants.primary,
        borderWidth: 5,
        borderRadius: 5
    }
});

export default class SearchCard extends Component {
    render() {
        const {style} = this.props;
        return (
            <View style={[componentStyle.outerCard, style]}>
                <CardHeader/>
                <CardImagePlaceholder/>
                <CardType/>
                <CardBody/>
            </View>
        );
    }
}