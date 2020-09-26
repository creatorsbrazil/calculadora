import * as React from 'react';
import { GestureResponderEvent, Text, View, TouchableOpacity } from 'react-native';

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
    } else if (props.title === ".") {
      cor = "blue";
    } else {
      cor = "green";
    }
  }
  else {
    cor = "blue";
  }

  return (
    <TouchableOpacity
      onPress={onPress}>
      <View style={{
        borderRadius: size / 4,
        height: size,
        width: size,
        margin: margin,
        backgroundColor: cor,
        elevation: 5
      }}
      >
        <Text
          style={{
            fontSize: (size * 2) / 3,
            textAlign: 'center',
            color: 'white',
          }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
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
