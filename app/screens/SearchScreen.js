/**
 * Created by taber on 10/16/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import constants from '../Constants';
import SearchCard from '../components/SearchCard';
import CircleButton from '../components/CircleButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Routes from '../Routes';
import httpClient from '../lib/HttpClient';
const {width} = Dimensions.get('window');
import autobind from 'autobind-decorator';

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

@autobind
export default class SearchScreen extends Component {
    constructor() {
        super();
        this.state = {
            colors: '',
            name: '',
            supertype: '',
            type: '',
            subtype: '',
            body: [],
            isSearching: false,
        }
    }
    onSearchPress() {
        const {isSearching} = this.state,
            {navigator} = this.props;
        if (!isSearching) {
            this.setState({
                ...this.state,
                isSearching: true
            });
            const url = `https://api.magicthegathering.io/v1/cards`;
            httpClient.get(url).then((response) => {
                this.setState({
                    ...this.state,
                    isSearching: false
                });
                const {cards} = response;
                if (cards && cards.length) {
                    const props = {
                        cards
                    };
                    navigator.push(Routes.cardListScreen(props));
                }
            });
        }
    }
    renderSearchButton() {
        const {isSearching} = this.state;
        console.log(isSearching);
        if (isSearching) {
            return (
                <CircleButton style={componentStyle.button}>
                    <ActivityIndicator
                        color={constants.primary}
                    />
                </CircleButton>
            );
        }
        else {
            return (
                <CircleButton style={componentStyle.button} onPress={this.onSearchPress}>
                    <Icon name="md-search" style={componentStyle.searchButton}/>
                </CircleButton>
            );
        }
    }
    render() {
        return (
            <View style={componentStyle.screen}>
                <SearchCard style={componentStyle.card}/>
                {this.renderSearchButton()}
            </View>
        );
    }
}

SearchScreen.propTypes = {
    navigator: PropTypes.object
};