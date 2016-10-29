/**
 * Created by taber on 10/17/2016.
 */
import React from 'react';
import LifeScreen from './screens/LifeScreen';
import SearchScreen from './screens/SearchScreen';

export default {
    lifeScreen: {
        title: 'Life Counter',
        index: 0,
        component: LifeScreen
    },
    searchScreen: {
        title: 'Card Search',
        index: 1,
        component: SearchScreen
    }
}