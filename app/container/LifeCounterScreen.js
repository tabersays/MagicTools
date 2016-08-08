/**
 * Created by taber on 7/17/2016.
 */
import React, {Component} from 'react';
import {Text, View, Dimensions, Platform} from 'react-native';
import Player from '../container/Player';
const {width, height} = Dimensions.get('window');
// Platform.select({
//             ios: 
//             android: 
//         });
const containerStyle = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    player1: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        borderTopWidth: 1,
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
                <View
                    style={containerStyle.player1}>
                    <Player/>
                </View>
            </View>
        );
    }
}