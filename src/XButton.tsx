import * as React from 'react';
import { GestureResponderEvent, Text, View } from 'react-native';

/**
 * Modelo de Botão da calculadora 
 * @param props propriedades do botão
 */
export function XButton(props: IXButton) {
  const margin = Math.ceil((props.size ?? 30) / 15);
  const size = (props.size ?? 30) - 2 * margin;

  const onPress = (event: GestureResponderEvent) => {
    props.onPress(props.title);
  };

  let cor: string;

  if (isNaN(+props.title)) {
    if (props.title === "C") {
      cor = "red";
    } else if (props.title === "=") {
      cor = "orange";
    } else {
      cor = "green";
    }
  }
  else {
    cor = "blue";
  }

  return (
    <View>
      <Text
        style={{
          borderRadius: size / 2,
          fontSize: (size * 2) / 3,
          height: size,
          width: size,
          margin: margin,
          textAlign: 'center',
          color: 'white',
          backgroundColor: cor
        }}
        onPress={onPress}>
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
  onPress: (key: string) => void;
}
