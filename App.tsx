import * as React from 'react';
import { Calculadora } from './calculadora';
import { useDimensions } from '@react-native-community/hooks'
import { StatusBar, View } from 'react-native';

export default function App() {

  const dimensions = useDimensions();
  const statusBarHeight = StatusBar.currentHeight ?? 0;

  return <View style={{ marginTop: statusBarHeight }}>
    <Calculadora
      width={dimensions.window.width}
      height={dimensions.window.height - statusBarHeight}
    />
  </View>

}
