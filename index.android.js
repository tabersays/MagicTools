/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Navigator, Text, View} from 'react-native';
import routes from './app/Routes';
import constants from './app/Constants';
const componentStyles = {
    navigationBar: {
        height: 56,
        backgroundColor: constants.primary,
    },
    titleText: {
        color: constants.white,
        fontSize: 18
    },
    navWrapper: {
        flex: 1,
        justifyContent: 'center'
    }
};

export default class MagicTools extends Component {
    render() {
        return (
            <Navigator
                initialRoute={routes.lifeScreen}
                renderScene={(route) => {
                    return (<route.component/>);
                }}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: ({leftButton}) => leftButton,
                            RightButton: ({rightButton}) => rightButton,
                            Title: ({title}) => <View style={componentStyles.navWrapper}><Text style={componentStyles.titleText}>{title}</Text></View>
                        }}
                        style={componentStyles.navigationBar}/>
                }/>
        );
    }
}
AppRegistry.registerComponent('MagicTools', () => MagicTools);
