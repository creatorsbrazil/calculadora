import * as React from 'react';
import { Calculadora } from './calculadora';
import { useDimensions } from '@react-native-community/hooks'

export default function App() {

  const dimensions = useDimensions();

  return <>
    <Calculadora width={dimensions.window.width} height={dimensions.window.height} />
  </>
}
