import * as React from 'react';
import { Text, View, Button } from 'react-native';
import XButton from './XButton';

export default function Teclado(props: ITeclado) {
  function tecla(key) {
    props.onKey(key);
  }

  const xSize = (props.size ?? 120) / 4;

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <XButton title="7" size={xSize} onPress={() => tecla(7)} />
        <XButton title="8" size={xSize} onPress={() => tecla(8)} />
        <XButton title="9" size={xSize} onPress={() => tecla(9)} />
        <XButton title="+" size={xSize} onPress={() => tecla('+')} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <XButton title="4" size={xSize} onPress={() => tecla(4)} />
        <XButton title="5" size={xSize} onPress={() => tecla(5)} />
        <XButton title="6" size={xSize} onPress={() => tecla(6)} />
        <XButton title="-" size={xSize} onPress={() => tecla('-')} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <XButton title="1" size={xSize} onPress={() => tecla(1)} />
        <XButton title="2" size={xSize} onPress={() => tecla(2)} />
        <XButton title="3" size={xSize} onPress={() => tecla(3)} />
        <XButton title="X" size={xSize} onPress={() => tecla('X')} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <XButton title="C" size={xSize} onPress={() => tecla('C')} />
        <XButton title="0" size={xSize} onPress={() => tecla(0)} />
        <XButton title="=" size={xSize} onPress={() => tecla('=')} />
        <XButton title="/" size={xSize} onPress={() => tecla('/')} />
      </View>
    </View>
  );
}

interface ITeclado {
  size?: Number;
  onKey: (key) => void;
}
