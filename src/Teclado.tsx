import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { XButton } from './XButton';

export function Teclado(props: ITeclado) {
  function tecla(key: string) {
    props.onKey(key);
  }

  const size = (props.size ?? 30);

  const extraKeys = <View style={props.extraRow ? styles.rowContainer : styles.colContainer}>
    <XButton title="1/" size={size} onPress={tecla} />
    <XButton title="^2" size={size} onPress={tecla} />
    <XButton title="√" size={size} onPress={tecla} />
    <XButton title="∏" size={size} onPress={tecla} />
  </View>

  return (
    <View style={{ flexDirection: 'row', flex: 4 }}>
      <View style={{ flexDirection: 'column', flex: 4 }}>
        {props.extraRow && extraKeys}
        <View style={styles.rowContainer}>
          <XButton title="7" size={size} onPress={tecla} />
          <XButton title="8" size={size} onPress={tecla} />
          <XButton title="9" size={size} onPress={tecla} />
          <XButton title="+" size={size} onPress={tecla} />
        </View>
        <View style={styles.rowContainer}>
          <XButton title="4" size={size} onPress={tecla} />
          <XButton title="5" size={size} onPress={tecla} />
          <XButton title="6" size={size} onPress={tecla} />
          <XButton title="-" size={size} onPress={tecla} />
        </View>
        <View style={styles.rowContainer}>
          <XButton title="1" size={size} onPress={tecla} />
          <XButton title="2" size={size} onPress={tecla} />
          <XButton title="3" size={size} onPress={tecla} />
          <XButton title="X" size={size} onPress={tecla} />
        </View>
        <View style={styles.rowContainer}>
          <XButton title="C" size={size} onPress={tecla} />
          <XButton title="0" size={size} onPress={tecla} />
          <XButton title="=" size={size} onPress={tecla} />
          <XButton title="/" size={size} onPress={tecla} />
        </View>
      </View>
      {!props.extraRow && extraKeys}
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    flex: 4
  },
  colContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: "center",
  }
})

export interface ITeclado {
  size?: number;
  extraRow?: boolean;
  onKey: (key: string) => void;
}
