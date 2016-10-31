/**
 * Created by taber on 10/17/2016.
 */
import React from 'react';
import LifeScreen from './screens/LifeScreen';
import SearchScreen from './screens/SearchScreen';
import CardListSearch from './screens/CardListScreen';
import CardScreen from './screens/CardScreen';

export default {
    lifeScreen: (props) => {
        return {
            title: 'Life Counter',
            index: 0,
            component: LifeScreen,
            props
        }

    },
    searchScreen: (props) => {
        return {
            title: 'Card Search',
            index: 1,
            component: SearchScreen,
            props
        }
    },
    cardListScreen: (props) => {
        return {
            title: 'Card List',
            index: 2,
            component: CardListSearch,
            props
        }
    },
    cardScreen: (props) => {
        return {
            title: props.name,
            index: 3,
            component: CardScreen,
            props
        }
    }
}