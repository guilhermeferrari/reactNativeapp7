import React from 'react'
import { Text, View, StyleSheet, TextInput, Picker } from 'react-native';

export default props => (
    <View>
        <Picker>
            <Picker.Item label='Soma' value='soma' />
            <Picker.Item label='Subtração' value='subtracao' />
        </Picker>
    </View>
)

const styles = StyleSheet.create({
    selec: {
        width: 100
    },
    viewSelec: {
        backgroundColor: 'orange',
    }
})