import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Navigator, Text, View, TouchableOpacity, BackAndroid} from 'react-native';
import routes from './app/Routes';
import constants from './app/Constants';
import Icon from 'react-native-vector-icons/Ionicons';

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
        justifyContent: 'center',
    },
    iconButton: {
        color: constants.white,
        fontSize: 30,
        padding: 15
    }
};

export default class MagicTools extends Component {
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
                this.navigator.pop();
                return true;
            }
            return false;
        });
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress')
    }
    render() {
        return (
            <Navigator
                ref={(ref) => this.navigator = ref}
                initialRoute={routes.lifeScreen()}
                renderScene={(route) => {
                    return (<route.component {...route.props} navigator={this.navigator}/>);
                }}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: (route, navigator, index) => {
                                if (index === 0) {
                                    return (
                                        <TouchableOpacity style={componentStyles.navWrapper}
                                            onPress={() => {
                                                navigator.push(routes.searchScreen());
                                            }}>
                                            <Icon name="md-search" style={componentStyles.iconButton}/>
                                        </TouchableOpacity>
                                    );
                                } else {
                                    return (
                                        <TouchableOpacity style={componentStyles.navWrapper}
                                                          onPress={() => {
                                                              navigator.pop();
                                                          }}>
                                            <Icon name="md-arrow-back" style={componentStyles.iconButton}/>
                                        </TouchableOpacity>
                                    );
                                }
                            },
                            RightButton: ({rightButton}, navigator) => rightButton,
                            Title: ({title}) => {
                                return (
                                    <View style={componentStyles.navWrapper}>
                                        <Text style={componentStyles.titleText}>{title}</Text>
                                    </View>
                                );
                            }
                        }}
                        style={componentStyles.navigationBar}/>
                }/>
        );
    }
}
AppRegistry.registerComponent('MagicTools', () => MagicTools);
