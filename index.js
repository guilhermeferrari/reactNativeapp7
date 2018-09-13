import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Topo from './src/components/Topo'
import Painel from './src/components/Painel'
import Resultado from './src/components/Resultado'

const Estilos = {
};

const app7 = () => (
    <View>
        <Topo />
        <Resultado />
        <Painel />
    </View>
);

AppRegistry.registerComponent('app7', () => app7);
