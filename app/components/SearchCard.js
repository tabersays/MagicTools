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
        const borderColors = {
                black: 'black',
                blue: 'blue',
                red: 'red',
                white: 'white',
                green: 'green',
                multicolor: 'gold',
                colorless: 'gainsboro'
            },
            {colors} = this.props;
        let color;
        if (!colors.length) {
            color = 'colorless';
        } else if (colors.length === 1) {
            color = colors[0].toLowerCase();
        } else {
            color = 'multicolor'
        }
        return {backgroundColor: borderColors[color]}
    }
    render() {
        const {style, onCardNameChange, colors, onColorsChange} = this.props;
        return (
            <View style={[componentStyle.outerCard, style, this.getBackgroundColor()]}>
                <CardHeader onCardNameChange={onCardNameChange} colors={colors} onColorsChange={onColorsChange}/>
                <CardImagePlaceholder/>
                <CardType/>
                <CardBody/>
            </View>
        );
    }
}

SearchCard.propTypes = {
    onCardNameChange: PropTypes.func,
    colors: PropTypes.array,
    onColorsChange: PropTypes.func,
};