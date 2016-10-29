/**
 * Created by taber on 10/16/2016.
 */
/**
 * Created by taber on 10/16/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import CounterChanger from '../components/CounterChanger';
import constants from '../Constants';

const componentStyles = {
    secondaryCounters: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryCounter: {
        padding: 15
    },
    primaryCounter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export default class Player extends Component {
    renderPoisonCounter() {
        const {isPoisonShown, poisonDamage, changePoisonDamage} = this.props;
        if (isPoisonShown) {
            return (
                <View style={componentStyles.secondaryCounter}>
                    <CounterChanger
                        color="green"
                        plusPress={() => {
                            changePoisonDamage(1);
                        }}
                        minusPress={() => {
                            changePoisonDamage(-1);
                        }}
                        counter={poisonDamage}/>
                </View>
            );
        }
    }
    renderCommanderCounter() {
        const {isCommanderShown, commanderDamage, changeCommanderDamage} = this.props;
        if (isCommanderShown) {
            return (
                <View style={componentStyles.secondaryCounter}>
                    <CounterChanger
                        color="red"
                        plusPress={() => {
                            changeCommanderDamage(1);
                        }}
                        minusPress={() => {
                            changeCommanderDamage(-1);
                        }}
                        counter={commanderDamage}/>
                </View>
            );
        }
    }
    renderSecondaryCounters() {
        const {isPoisonShown, isCommanderShown} = this.props;
        if (isPoisonShown || isCommanderShown) {
            return (
                <View style={componentStyles.secondaryCounters}>
                    {this.renderPoisonCounter()}
                    {this.renderCommanderCounter()}
                </View>
            );
        }
    }
    render() {
        const {style, changeLife, life} = this.props;
        return (
            <View style={style}>
                <View style={componentStyles.primaryCounter}>
                    <CounterChanger
                        color={constants.primary}
                        textColor={constants.white}
                        counter={life}
                        plusPress={() => {
                            changeLife(1);
                        }}
                        minusPress={() => {
                            changeLife(-1);
                        }}/>
                </View>
                {this.renderSecondaryCounters()}
            </View>
        );
    }
}

Player.propTypes = {
    changeLife: PropTypes.func,
    changePoisonDamage: PropTypes.func,
    changeCommanderDamage: PropTypes.func,
    isPoisonShown: PropTypes.bool,
    isCommanderShown: PropTypes.bool
};