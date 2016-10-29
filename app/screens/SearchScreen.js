/**
 * Created by taber on 10/16/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import constants from '../Constants';
import SearchCard from '../containers/SearchCard';
import CircleButton from '../components/CircleButton';
import Icon from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('window');


const componentStyle = StyleSheet.create({
    screen: {
        marginTop: 56,
        backgroundColor: constants.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        margin: 15,
        flex: 1,
        width: width - 90
    },
    searchButton: {
        color: constants.primary,
        fontSize: 30,
        padding: 15
    },
    button: {
        margin: 15,
        marginTop: 0,
        marginBottom: 30,
        alignSelf: 'flex-end'
    }
});

export default class LifeScreen extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={componentStyle.screen}>
                <SearchCard style={componentStyle.card}/>
                <CircleButton style={componentStyle.button}>
                    <Icon name="md-search" style={componentStyle.searchButton}/>
                </CircleButton>
            </View>
        );
    }
}