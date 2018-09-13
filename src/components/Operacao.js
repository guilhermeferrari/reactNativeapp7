import React from 'react'
import { Text, View, StyleSheet, TextInput, Picker } from 'react-native';

export default props => (
    <Picker style={styles.selec}>
        <Picker.Item label='Soma' value='soma'/>
        <Picker.Item label='Subatração' value='subtracao'/>
    </Picker>
)

const styles = StyleSheet.create({
    selec: {
        height: 300,
        width: 200
    },
    visor: {
        fontSize: 20,
        fontWeight: '300'
    }
})