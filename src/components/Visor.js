import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default props => (
    <View style={styles.viewVisor}>
        <TextInput
            style={styles.visor}
            placeholder='Resultado'
            editable={false}
            value={props.res}
        />
    </View>
)

const styles = StyleSheet.create({
    viewVisor: {
        backgroundColor: 'gray',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    visor: {
        fontSize: 20,
        fontWeight: '300'
    }
})