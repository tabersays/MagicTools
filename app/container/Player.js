/**
 * Created by taber on 7/17/2016.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import Counter from '../component/Counter';
import CicleButton from '../component/CircleButton';
import Icon from 'react-native-vector-icons/Ionicons';

const containerStyle = {
    plusButton: {
        padding: 5
    },
    minusButton: {
        padding: 5
    },
    counter: {
        padding: 5
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    }

};
export default class Player extends Component {
    constructor() {
        super();
        this.decrementLife = this.decrementLife.bind(this);
        this.incrementLife = this.incrementLife.bind(this);
        this.resetLife = this.resetLife.bind(this);
        this.state = {
            life: 20
        };
    }
    incrementLife() {
        const {life} = this.state;
        const newLife = life + 1;
        this.setState({
            ...this.state,
            life: newLife
        });
    }
    decrementLife() {
        const {life} = this.state;
        const newLife = life - 1;
        this.setState({
            ...this.state,
            life: newLife
        });
    }
    resetLife() {
        this.setState({
            ...this.state,
            life: 20
        });
    }
    render() {
        const {life} = this.state;
        return (
            <View
                style={containerStyle.container}
            >
                <CicleButton
                    style={containerStyle.minusButton}
                    text="-"
                    color="blue"
                    onPress={this.decrementLife}>
                        <Icon name="md-remove" size={20}/>
                    </CicleButton>
                <Counter
                    style={containerStyle.counter}
                    text={life}
                    onLongPress={this.resetLife}/>
                <CicleButton
                    style={containerStyle.plusButton}
                    text="+"
                    onPress={this.incrementLife}>
                        <Icon name="md-add" size={20}/>
                </CicleButton>
            </View>
        );
    }
}