/**
 * Created by taber on 7/17/2016.
 */
import React, {Component} from 'react';
import {Text, View, Dimensions, Platform} from 'react-native';
import Player from '../container/Player';
import NavigatorNavigationBarStylesAndroid from 'NavigatorNavigationBarStylesAndroid';
import NavigatorNavigationBarStylesIOS from 'NavigatorNavigationBarStylesIOS';
import Settings from '../component/Settings';
const {width, height} = Dimensions.get('window');
const headerStyleSheet = Platform.select(
	{
		ios: NavigatorNavigationBarStylesIOS,
		android: NavigatorNavigationBarStylesAndroid,
	}
);
const containerStyle = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: headerStyleSheet.General.TotalNavHeight,
        backgroundColor: 'whitesmoke'
    },
    player1: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        width,
    },
    player2: {
        flex: 1,
        justifyContent: 'center',
        transform: [
            {rotate: '180deg'}
        ],
        backgroundColor: 'whitesmoke',
        width
    },
    settings: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width
    }
};

export default class LifeCounterScreen extends Component {
    render() {
        return (
            <View
                style={containerStyle.container}>
                <View
                    style={containerStyle.player2}>
                    <Player/>
                </View>
                <View style={containerStyle.settings}>
                    <Settings/>
                </View>
                <View
                    style={containerStyle.player1}>
                    <Player/>
                </View>
            </View>
        );
    }
}