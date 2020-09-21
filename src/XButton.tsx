import * as React from 'react';
import { Text, View } from 'react-native';

/**
 * Modelo de Botão da calculadora 
 * @param props propriedades do botão
 */
export function XButton(props: IXButton) {
  const margin = (props.size ?? 30) / 15;
  const size = (props.size ?? 30) - 2 * margin;

  return (
    <View>
      <Text
        style={{
          borderRadius: size / 2,
          textAlign: 'center',
          fontSize: (size * 2) / 3,
          height: size,
          width: size,
          color: 'white',
          margin: margin,
          backgroundColor: 'blue'
        }}
        onPress={props.onPress}>
        {props.title}
      </Text>
    </View>
  );
}

export interface IXButton {
  /**
   * Tamanho bo botão
   */
  size?: number;
  /**
   * Texto do botão
  */
  title: string;
  /**
   * Ação do botão
   */
  onPress: (key) => void;
}
