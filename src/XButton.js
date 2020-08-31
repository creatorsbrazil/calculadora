import * as React from 'react';
import { Text, View } from 'react-native';

export default function XButton(props: IXButton) {
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

interface IXButton {
  size?: number;
  title: string;
  onPress: (key) => void;
}
