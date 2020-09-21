import * as React from 'react';
import { Text, View } from 'react-native';
import { Teclado } from './Teclado';

export default function Calculadora(props: ICalculadora) {
  const [display, displaySet] = React.useState<number>(0);
  const [memoria, memoriaSet] = React.useState<number>(0);
  const [operacao, operacaoSet] = React.useState('');
  const widthSize = (props.size ?? 120) - 8;

  function tecla(valor: string) {
    if (valor == 'C') {
      displaySet(0);
      memoriaSet(0);
      operacaoSet('');
    } else if (valor == '+' || valor == '-' || valor == 'X' || valor == '/') {
      memoriaSet(display);
      operacaoSet(valor);
      displaySet(0);
    } else if (valor == '=') {
      if (operacao == '+') {
        displaySet(memoria + display);
      } else if (operacao == '-') {
        displaySet(memoria - display);
      } else if (operacao == 'X') {
        displaySet(memoria * display);
      } else if (operacao == '/') {
        displaySet(memoria / display);
      }
    } else {
      displaySet(display * 10 + parseInt(valor));
    }
  }

  return (
    <View
      style={{
        width: widthSize,
        padding: 2,
        paddingTop: 6,
        margin: 2,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'column',
      }}>
      <Text
        style={{ fontSize: 10, position: 'absolute', backgroundColor: '#ccc' }}>
        {memoria} {operacao}
      </Text>
      <Text
        style={{
          paddingTop: 5,
          fontSize: 25,
          backgroundColor: '#ccc',
          textAlign: 'right',
        }}>
        {display}
      </Text>
      <Teclado onKey={tecla} size={widthSize - 8} />
    </View>
  );
}

export interface ICalculadora {
  size: number;
}
