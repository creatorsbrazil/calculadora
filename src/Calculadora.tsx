import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Teclado } from './Teclado';

export default function Calculadora(props: ICalculadora) {
  const [display, displaySet] = React.useState<number>(0);
  const [memoria, memoriaSet] = React.useState<number>(0);
  const [operacao, operacaoSet] = React.useState('');
  const statusBarHeight = StatusBar.currentHeight;
  const width = Math.ceil(props.width ?? 120) - 4; // margin total
  const height = Math.ceil(props.height ?? 120) - 4 - statusBarHeight;
  const heightUtil = height - 50; // display size 
  const keysSize = ((width > heightUtil ? heightUtil : width) - 10) / 4; // 10 = margin + border + padding

  function tecla(valor: string) {
    if (valor == 'C') {
      displaySet(0);
      memoriaSet(0);
      operacaoSet('');
    } else if (valor == '1/') {
      displaySet(1 / display);
    } else if (valor == '^2') {
      displaySet(display * display);
    } else if (valor == '√') {
      displaySet(Math.sqrt(display));
    } else if (valor == '∏') {
      displaySet(Math.PI);
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
    } else if (isNaN(+valor)) {
      memoriaSet(display);
      operacaoSet(valor);
      displaySet(0);
    } else {
      displaySet(display * 10 + parseInt(valor));
    }
  }

  return (
    <View style={[style.container, { width: width, height: height }]}>
      <Text style={style.acc}>{memoria} {operacao}</Text>
      <Text style={style.display}>{display}</Text>
      <Teclado onKey={tecla} size={keysSize} extraRow={height > width} />
    </View>
  );
}

const style = StyleSheet.create({
  acc: {
    fontSize: 14,
    top: 4,
    right: 5,
    position: 'absolute',
    backgroundColor: '#ccc',
    zIndex: 1
  },
  container: {
    padding: 4,
    margin: 2,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'column',
  },
  display: {
    textAlignVertical: "bottom",
    fontSize: 30,
    height: 50,
    backgroundColor: '#ccc',
    textAlign: 'right',
  }
});

export interface ICalculadora {
  width: number;
  height: number;
}
