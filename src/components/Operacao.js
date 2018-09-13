import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Picker } from 'react-native';

export default class Operacao extends Component {
    constructor(props){
        super(props)
        this.state= {
            operacao: ''
        }
    }
    render() {
        return (
            <View>
                <Picker selectedValue={this.state.operacao} onValueChange={op =>{
                    this.setState({operacao:op})
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