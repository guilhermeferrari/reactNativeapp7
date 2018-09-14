import React from 'react'
import { Text, View } from 'react-native';

import Visor from './Visor'

const Resultado = props => (
    <Visor res = {props.res}/>
);

export { Resultado };