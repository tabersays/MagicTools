/**
 * Created by taber on 10/16/2016.
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import SettingsBar from '../components/SettingsBar';
import Player from '../containers/Player';
import constants from '../Constants';

const componentStyle = {
    screen: {
        marginTop: 56,
        backgroundColor: constants.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    player1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    player2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
            {
                rotate: '180deg'
            }
        ]
    }
};

export default class LifeScreen extends Component {
    constructor() {
        super();
        this.onCommanderPress = this.onCommanderPress.bind(this);
        this.onPoisonPress = this.onPoisonPress.bind(this);
        this.onResetPress = this.onResetPress.bind(this);
        this.changePlayer1CommanderDamage = this.changePlayer1CommanderDamage.bind(this);
        this.changePlayer2CommanderDamage = this.changePlayer2CommanderDamage.bind(this);
        this.changePlayer1Life = this.changePlayer1Life.bind(this);
        this.changePlayer2Life = this.changePlayer2Life.bind(this);
        this.changePlayer1PoisonDamage = this.changePlayer1PoisonDamage.bind(this);
        this.changePlayer2PoisonDamage = this.changePlayer2PoisonDamage.bind(this);

        this.state = {
            player1Life: 20,
            player2Life: 20,
            player1PoisonDamage: 0,
            player2PoisonDamage: 0,
            player1CommanderDamage: 0,
            player2CommanderDamage: 0,
            isPoisonShown: false,
            isCommanderShown: false
        };
    }
    onResetPress(number = 20) {
        this.setState({
            ...this.state,
            player1Life: number,
            player2Life: number,
            player1PoisonDamage: 0,
            player2PoisonDamage: 0,
            player1CommanderDamage: 0,
            player2CommanderDamage: 0
        });
    }
    onPoisonPress() {
        this.setState({
            ...this.state,
            player1PoisonDamage: 0,
            player2PoisonDamage: 0,
            isPoisonShown: !this.state.isPoisonShown,
        });
    }
    onCommanderPress() {
        this.setState({
            ...this.state,
            player1CommanderDamage: 0,
            player2CommanderDamage: 0,
            isCommanderShown: !this.state.isCommanderShown
        })
    }
    changePlayer1Life(amount = 1) {
        this.setState({
            ...this.state,
            player1Life: Number(this.state.player1Life) + Number(amount)
        });
    }
    changePlayer2Life(amount = 1) {
        this.setState({
            ...this.state,
            player2Life: Number(this.state.player2Life) + Number(amount)
        });
    }
    changePlayer1PoisonDamage(amount = 1) {
        this.setState({
            ...this.state,
            player1PoisonDamage: Number(this.state.player1PoisonDamage) + Number(amount)
        });
    }
    changePlayer2PoisonDamage(amount = 1) {
        this.setState({
            ...this.state,
            player2PoisonDamage: Number(this.state.player2PoisonDamage) + Number(amount)
        });
    }
    changePlayer1CommanderDamage(amount = 1) {
        this.setState({
            ...this.state,
            player1CommanderDamage: Number(this.state.player1CommanderDamage) + Number(amount)
        });
    }
    changePlayer2CommanderDamage(amount = 1) {
        this.setState({
            ...this.state,
            player2CommanderDamage: Number(this.state.player2CommanderDamage) + Number(amount)
        });
    }
    render() {
        const {player2Life, player1Life, player1PoisonDamage, player2PoisonDamage, player1CommanderDamage, player2CommanderDamage, isPoisonShown, isCommanderShown} = this.state;
        return (
            <View style={componentStyle.screen}>
                <Player
                    life={player2Life}
                    changeLife={this.changePlayer2Life}
                    poisonDamage={player2PoisonDamage}
                    changePoisonDamage={this.changePlayer2PoisonDamage}
                    commanderDamage={player2CommanderDamage}
                    changeCommanderDamage={this.changePlayer2CommanderDamage}
                    isPoisonShown={isPoisonShown}
                    isCommanderShown={isCommanderShown}
                    style={componentStyle.player2}/>
                <SettingsBar
                    onResetPress={this.onResetPress}
                    onPoisonPress={this.onPoisonPress}
                    onCommanderPress={this.onCommanderPress}/>
                <Player
                    life={player1Life}
                    changeLife={this.changePlayer1Life}
                    poisonDamage={player1PoisonDamage}
                    changePoisonDamage={this.changePlayer1PoisonDamage}
                    commanderDamage={player1CommanderDamage}
                    changeCommanderDamage={this.changePlayer1CommanderDamage}
                    isPoisonShown={isPoisonShown}
                    isCommanderShown={isCommanderShown}
                    style={componentStyle.player1}/>
            </View>
        );
    }
}