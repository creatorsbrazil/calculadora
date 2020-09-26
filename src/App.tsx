import * as React from 'react';
import Calculadora from './Calculadora';
import { useDimensions } from '@react-native-community/hooks'
//import { useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {

  const dimensions = useDimensions();
  //const orientation = useDeviceOrientation();

  return <>
    <Calculadora width={dimensions.window.width} height={dimensions.window.height} />
  </>
}
