/**
 * Created by taber on 7/17/2016.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import Counter from '../component/Counter';
import CicleButton from '../component/CircleButton';
import Icon from 'react-native-vector-icons/Ionicons';
import EventEmitter from '../component/EventEmitter';

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
    constructor(props) {
        super(props);
        this.decrementLife = this.decrementLife.bind(this);
        this.incrementLife = this.incrementLife.bind(this);
        this.resetLife = this.resetLife.bind(this);
        this.state = {
            life: props.default || 20
        };
    }

    componentWillMount() {
        EventEmitter.addListener('reset20', () => {
            this.resetLife(20);
        });
        EventEmitter.addListener('reset40', () => {
            this.resetLife(40);
        });
        EventEmitter.addListener('poison', () => {

        });
        EventEmitter.addListener('commander', () => {

        });
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
    resetLife(life) {
        this.setState({
            ...this.state,
            life: life || this.props.default || 20
        });
    }
    
    render() {
        const {life} = this.state;
        return (
            <View
                style={containerStyle.container}>
                <CicleButton
                    style={containerStyle.minusButton}
                    onPress={this.decrementLife}>
                        <Icon name="md-remove" size={20} color="#424242"/>
                    </CicleButton>
                <Counter
                    style={containerStyle.counter}
                    text={life}
                    onLongPress={this.resetLife}/>
                <CicleButton
                    style={containerStyle.plusButton}
                    onPress={this.incrementLife}>
                        <Icon name="md-add" size={20} color="#424242"/>
                </CicleButton>
            </View>
        );
    }
}