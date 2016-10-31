/**
 * Created by taber on 10/30/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import constants from '../Constants';
const {width} = Dimensions.get('window');
import Routes from '../Routes';
import autobind from 'autobind-decorator';

const componentStyles = StyleSheet.create({
    screen: {
        marginTop: 56,
        backgroundColor: constants.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    listItem: {
        borderBottomWidth: 1,
        borderBottomColor: constants.primary
    },
    smallCard: {
        width: 50,
        height: 100,
        resizeMode: 'contain'
    },
    scrollView: {
        flex: 1,
        width
    }
});

@autobind
export default class CardListScreen extends Component {
    constructor() {
        super();
    }
    onListItemPress(cardIndex) {
        const {navigator, cards} = this.props,
            props = {
                ...cards[cardIndex]
            };
        navigator.push(Routes.cardScreen(props));
    }
    renderListItems() {
        const {cards} = this.props;
        return cards.map((card, index) => (
            <View key={index}
                  style={componentStyles.listItem}>
                <TouchableOpacity style={componentStyles.cardItem}
                                  onPress={() => this.onListItemPress(index)}>
                    <Text>{card.name}</Text>
                    <Image style={componentStyles.smallCard}
                           source={{
                               uri: card.imageUrl
                           }}/>
                </TouchableOpacity>
            </View>
        ));
    }
    render() {
        return (
            <View style={componentStyles.screen}>
                <ScrollView style={componentStyles.scrollView}>
                    {this.renderListItems()}
                </ScrollView>
            </View>
        )
    }
}

CardListScreen.propTypes = {
    cards: PropTypes.array,
    navigator: PropTypes.object
};
