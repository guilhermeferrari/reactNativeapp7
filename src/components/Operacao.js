import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Picker } from 'react-native';

export default class Operacao extends Component {
    render() {
        return (
            <View>
                <Picker selectedValue={this.props.operacao}
                    onValueChange={op => {
                        this.props.mudaOperacao(op)
                    }}>
                    <Picker.Item label='Soma' value='soma' />
                    <Picker.Item label='Subtração' value='subtracao' />
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    selec: {
        width: 100
    },
    viewSelec: {
        backgroundColor: 'orange',
    }
})