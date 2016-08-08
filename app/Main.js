/**
 * Created by taber on 7/17/2016.
 */
import React, {Component} from 'react';
import {Navigator, Text, TouchableHighlight, View} from 'react-native';
import routes from './routes';
import Icon from 'react-native-vector-icons/Ionicons';

const routeMapper = {
    LeftButton: () => {
        return (
            <TouchableHighlight onPress={() => {}} style={{height: 50, width: 50, alignItems: 'center', justifyContent: 'center'}} >
                <Icon name="md-menu" size={20} color="whitesmoke" />
            </TouchableHighlight>
        );
    },
    RightButton: () => {
        return (
            <TouchableHighlight onPress={() => {}} style={{height: 50, width: 50, alignItems: 'center', justifyContent: 'center'}}>
                <Icon name="md-more" size={20} color="whitesmoke" />
            </TouchableHighlight>
        );
    },
    Title: (route) => {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{color: 'whitesmoke'}}>{route.title}</Text>
            </View>
        );
    }
}

export default class Main extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={routes.lifeCounterScreen}
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} />
                }}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                navigationBar={<Navigator.NavigationBar routeMapper={routeMapper} style={{backgroundColor: '#424242'}}/>} />
        );
    }
}