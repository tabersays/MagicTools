/**
 * Created by taber on 10/17/2016.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CircleButton from '../components/CircleButton';
import constants from '../Constants';

const componentStyles = {
    component: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textField: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        borderRadius: 5
    },
    text: {
        fontSize: 18
    }
};
export default class CounterChanger extends Component {
    render() {
        const {counter, minusPress, plusPress, color, textColor} = this.props;
        return (
            <View style={componentStyles.component}>
                <CircleButton onPress={minusPress}><Text style={componentStyles.text}>-</Text></CircleButton>
                <View style={[componentStyles.textField, {backgroundColor: color || constants.primary}]}>
                    <Text style={[componentStyles.text, {color: textColor || constants.white}]}>{counter}</Text>
                </View>
                <CircleButton onPress={plusPress}><Text style={componentStyles.text}>+</Text></CircleButton>
            </View>
        );
    }
}