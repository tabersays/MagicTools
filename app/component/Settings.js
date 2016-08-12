/**
 * Created by taber on 7/17/2016.
 */
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Dimensions, LayoutAnimation, UIManager} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CircleButton from '../component/CircleButton';
import EventEmitter from '../component/EventEmitter';

const {width, height} = Dimensions.get('window');
const componentStyle = {
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#FFC0CB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangle: {
        height: 50,
        //backgroundColor: '#FFC0CB',
        alignItems: 'center',
        justifyContent: 'center',
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
};
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
            return (
            <TouchableOpacity style={componentStyle.rectangle} onPress={this.onMenuPress}>
                <View style={componentStyle.columns}>
                    <View style={componentStyle.buttonContainer}>
                        <CircleButton onPress={() => {
                            EventEmitter.emit('reset20');
                            this.onMenuPress();
                        }}>
                            <Icon name="md-contact" size={40} color="#424242" />
                        </CircleButton>
                    </View>
                    <View style={componentStyle.buttonContainer}>
                        <CircleButton onPress={() => {
                            EventEmitter.emit('reset40');
                            this.onMenuPress();
                        }}>
                            <Icon name="md-contacts" size={40} color="#424242" />
                        </CircleButton>
                    </View>
                    <View style={componentStyle.buttonContainer}>
                        <CircleButton onPress={() => {
                            EventEmitter.emit('poison');
                            this.onMenuPress();
                        }}>
                            <Icon name="md-nuclear" size={40} color="#424242" />
                        </CircleButton>
                    </View>
                    <View style={componentStyle.buttonContainer}>
                        <CircleButton onPress={() => {
                            EventEmitter.emit('commander');
                            this.onMenuPress();
                        }}>
                            <Icon name="md-medal" size={40} color="#424242" />
                        </CircleButton>
                    </View>
                </View>
            </TouchableOpacity>
        );
        } else {
            return (
            <TouchableOpacity style={componentStyle.circle} onPress={this.onMenuPress}>
                <Icon name="md-more" size={26} color="#424242" />
            </TouchableOpacity>
        );
        }
    }
}