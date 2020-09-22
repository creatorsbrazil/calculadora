import * as React from 'react';
import { View } from 'react-native';
import { XButton } from './XButton';

export function Teclado(props: ITeclado) {
  function tecla(key: string) {
    props.onKey(key);
  }

  const xSize = (props.size ?? 30);

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <XButton title="7" size={xSize} onPress={tecla} />
        <XButton title="8" size={xSize} onPress={tecla} />
        <XButton title="9" size={xSize} onPress={tecla} />
        <XButton title="+" size={xSize} onPress={tecla} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <XButton title="4" size={xSize} onPress={tecla} />
        <XButton title="5" size={xSize} onPress={tecla} />
        <XButton title="6" size={xSize} onPress={tecla} />
        <XButton title="-" size={xSize} onPress={tecla} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <XButton title="1" size={xSize} onPress={tecla} />
        <XButton title="2" size={xSize} onPress={tecla} />
        <XButton title="3" size={xSize} onPress={tecla} />
        <XButton title="X" size={xSize} onPress={tecla} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <XButton title="C" size={xSize} onPress={tecla} />
        <XButton title="0" size={xSize} onPress={tecla} />
        <XButton title="=" size={xSize} onPress={tecla} />
        <XButton title="/" size={xSize} onPress={tecla} />
      </View>
    </View>
  );
}

export interface ITeclado {
  size?: number;
  onKey: (key: string) => void;
}
