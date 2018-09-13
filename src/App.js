import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Topo from './components/Topo'
import Painel from './components/Painel'
import Resultado from './components/Resultado'

const Estilos = {
};

export default props => (
    <View>
        <Topo />
        <Resultado />
        <Painel />
    </View>
);
