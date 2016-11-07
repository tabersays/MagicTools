/**
 * Created by taber on 10/28/2016.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput, Modal, TouchableOpacity} from 'react-native';
import constants from '../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import autobind from 'autobind-decorator';

const componentStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 35,
        justifyContent: 'center',
        borderColor: constants.primary,
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        backgroundColor: constants.white
    },
    name: {
        flex: 3,
        height: 35,
        color: constants.primary
    },
    type: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 5
    },
    WHITE: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 20,
        height: 20
    },
    BLUE: {
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 20,
        height: 20
    },
    BLACK: {
        backgroundColor: 'black',
        borderRadius: 50,
        width: 20,
        height: 20
    },
    RED: {
        backgroundColor: 'red',
        borderRadius: 50,
        width: 20,
        height: 20
    },
    GREEN: {
        backgroundColor: 'green',
        borderRadius: 50,
        width: 20,
        height: 20
    },
    colorless: {
        backgroundColor: 'grey',
        borderRadius: 50,
        width: 20,
        height: 20
    },
    backgroundModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    modal: {
        backgroundColor: constants.white,
        borderRadius: 5,
        minWidth: 200
    },
    row: {
        flexDirection: 'row',
        margin: 5,
        borderTopColor: constants.primary,
        borderTopWidth: 1,
        padding: 5,
        height: 35,
        alignItems: 'center'
    },
    check: {
        alignSelf: 'flex-end'
    }
});

@autobind
export default class CardHeader extends Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false
        };
    }

    onTextChange(value) {
        const {onCardNameChange} = this.props;
        onCardNameChange(value);
    }

    onColorsChange(value) {
        const {colors, onColorsChange} = this.props;
        console.log(value);
        if (colors.includes(value)) {
            onColorsChange(colors.filter((color) => color !== value));
        } else {
            onColorsChange([...colors, value]);
        }
    }

    renderColors() {
        const {colors} = this.props;
        if (!colors.length) {
            return (<View style={componentStyles.colorless}/>)
        }
        return colors.map((color, index) => (<View style={componentStyles[color.toUpperCase()]} key={index}/>));

    }

    renderCheck(color) {
        const {colors} = this.props;
        if (colors.includes(color)) {
            return (<Icon name="md-checkmark" color={constants.accent} size={30} style={componentStyles.check}/>);
        }
    }

    render() {
        return (
            <View style={componentStyles.header}>
                <Modal visible={this.state.isModalVisible}
                       animationType={'fade'}
                       onRequestClose={() => this.setState({...this.state, isModalVisible: false})}
                       transparent={true}>
                    <TouchableOpacity style={componentStyles.backgroundModal}
                                      onPress={() => this.setState({...this.state, isModalVisible: false})}>
                        <View style={componentStyles.modal}>
                            <Text>Colors</Text>
                            <TouchableOpacity style={componentStyles.row} onPress={() => this.onColorsChange('White')}>
                                <Text>White</Text>
                                <View style={componentStyles.WHITE}/>
                                <View>
                                    {this.renderCheck('White')}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={componentStyles.row} onPress={() => this.onColorsChange('Black')}>
                                <Text>Black</Text>
                                <View style={componentStyles.BLACK}/>
                                <View>
                                    {this.renderCheck('Black')}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={componentStyles.row} onPress={() => this.onColorsChange('Blue')}>
                                <Text>Blue</Text>
                                <View style={componentStyles.BLUE}/>
                                <View>
                                    {this.renderCheck('Blue')}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={componentStyles.row} onPress={() => this.onColorsChange('Red')}>
                                <Text>Red</Text>
                                <View style={componentStyles.RED}/>
                                <View>
                                    {this.renderCheck('Red')}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={componentStyles.row} onPress={() => this.onColorsChange('Green')}>
                                <Text>Green</Text>
                                <View style={componentStyles.GREEN}/>
                                <View>
                                    {this.renderCheck('Green')}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <TextInput
                    style={componentStyles.name}
                    selectionColor={constants.accent}
                    defaultValue="Card Name"
                    underlineColorAndroid={constants.accent}
                    onChangeText={this.onTextChange}
                    blurOnSubmit={true}/>
                <TouchableOpacity style={componentStyles.type}
                                  onPress={() => this.setState({...this.state, isModalVisible: true})}>
                    {this.renderColors()}
                </TouchableOpacity>
            </View>
        )
    }
}

CardHeader.propTypes = {
    onCardNameChange: PropTypes.func,
    onColorsChange: PropTypes.func,
    colors: PropTypes.array
};
