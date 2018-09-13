import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import { Topo, Resultado, Painel } from './components'

const Estilos = {
};

export default props => (
    <View>
        <Topo />
        <Resultado />
        <Painel />
    </View>
);
