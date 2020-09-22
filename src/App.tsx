import * as React from 'react';
import Calculadora from './Calculadora';
import { useDeviceOrientation } from '@react-native-community/hooks'
import { useDimensions } from '@react-native-community/hooks'

export default function App() {

  const orientation = useDeviceOrientation();
  const dimensions = useDimensions();
  const width = orientation.portrait ? dimensions.window.width : dimensions.window.height;
  const height = orientation.portrait ? dimensions.window.height : dimensions.window.width;

  return <>
    <Calculadora width={width} height={height} />
  </>
}
