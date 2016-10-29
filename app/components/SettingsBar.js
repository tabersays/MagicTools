/**
 * Created by taber on 10/16/2016.
 */
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Dimensions, LayoutAnimation, UIManager} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import constants from '../Constants';
const {width} = Dimensions.get('window');
const componentStyle = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: constants.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: constants.primary,
        width
    },
    columns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});
export default class Settings extends Component {
    constructor() {
        super();
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        this.onMenuPress = this.onMenuPress.bind(this);
        this.state = {
            isMenu: false
        };
    }
    componentWillMount() {
        LayoutAnimation.easeInEaseOut();
    }
    onMenuPress() {
        LayoutAnimation.easeInEaseOut();
        this.setState({isMenu: !this.state.isMenu});
    }
    render() {
        if(this.state.isMenu) {
            const {onResetPress, onPoisonPress, onCommanderPress} = this.props;
            return (
                <TouchableOpacity style={componentStyle.rectangle}>
                    <View style={componentStyle.columns}>
                        <TouchableOpacity style={componentStyle.buttonContainer}
                              onPress={() => {
                                  onResetPress();
                                  this.onMenuPress();
                              }}>
                            <Icon name="md-contact" size={40} color={constants.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={componentStyle.buttonContainer}
                              onPress={() => {
                                  onResetPress(40);
                                  this.onMenuPress();
                              }}>
                            <Icon name="md-contacts" size={40} color={constants.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={componentStyle.buttonContainer}
                              onPress={() => {
                                  onPoisonPress();
                                  this.onMenuPress();
                              }}>
                            <Icon name="md-nuclear" size={40} color={constants.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={componentStyle.buttonContainer}
                              onPress={() => {
                                  onCommanderPress();
                                  this.onMenuPress();
                              }}>
                            <Icon name="md-medal" size={40} color={constants.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={componentStyle.buttonContainer}
                              onPress={this.onMenuPress}>
                            <Icon name="md-close" size={40} color={constants.white} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={componentStyle.circle} onPress={this.onMenuPress}>
                    <Icon name="md-more" size={26} color={constants.white} />
                </TouchableOpacity>
            );
        }
    }
}

Settings.propTypes = {
    onPoisonPress: PropTypes.func,
    onCommanderPress: PropTypes.func,
    onResetPress: PropTypes.func
};