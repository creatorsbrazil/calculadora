import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Teclado } from './teclado';

export function Calculadora(props: ICalculadora) {

  const [display, displaySet] = React.useState("0");
  const [memoria, memoriaSet] = React.useState(0);
  const [operacao, operacaoSet] = React.useState('');
  const statusBarHeight = StatusBar.currentHeight;
  const width = Math.ceil(props.width ?? 120) - 4; // margin total
  const height = Math.ceil(props.height ?? 120) - 4 - statusBarHeight;
  const heightUtil = height - 90; // display size 
  const keysSize = ((width > heightUtil ? heightUtil : width) - 10) / 4; // 10 = margin + border + padding

  function tecla(valor: string) {
    if (valor == 'C') {
      displaySet("0");
      memoriaSet(0);
      operacaoSet('');
    } else if (valor == '1/') {
      toDisplay(1 / (+display));
    } else if (valor == '^2') {
      toDisplay(+display * +display);
    } else if (valor == '√') {
      toDisplay(Math.sqrt(+display));
    } else if (valor == '.') {
      if (display.indexOf('.') === -1) {
        displaySet(display + valor);
      }
    } else if (valor === '=') {
      if (operacao === '+') {
        toDisplay(memoria + +display);
      } else if (operacao === '-') {
        toDisplay(memoria - +display);
      } else if (operacao === 'X') {
        toDisplay(memoria * +display);
      } else if (operacao === '/') {
        toDisplay(memoria / +display);
      }
    } else if (isNaN(+valor)) {
      memoriaSet(+display);
      operacaoSet(valor);
      displaySet('0');
    } else {
      if (display === '0') {
        displaySet(valor);
      } else {
        displaySet(display + valor);
      }
    }
  }

  function toDisplay(value: number) {
    let strValue = value.toFixed(9);
    let i = strValue.length - 1;
    while (i > 0) {
      if (strValue.substr(i, 1) === '0') {
        strValue = strValue.substr(0, i)
      } else {
        break;
      }
      i--;
    }
    displaySet(strValue);
  }

  return (
    <View style={[style.container, { width: width, height: height }]}>
      <Text style={style.acc} numberOfLines={1} >{memoria} {operacao}</Text>
      <Text style={style.display} numberOfLines={1}>{display}</Text>
      <Teclado onKey={tecla} size={keysSize} extraRow={height > width} />
    </View>
  );
}

const style = StyleSheet.create({
  acc: {
    fontSize: 20,
    top: 4,
    right: 5,
    position: 'absolute',
    zIndex: 1
  },
  container: {
    padding: 4,
    margin: 2,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'column'
  },
  display: {
    paddingHorizontal: 3,
    textAlignVertical: "bottom",
    fontSize: 50,
    height: 80,
    borderRadius: 7,
    backgroundColor: '#ccc',
    textAlign: 'right',
    marginBottom: 10
  }
});

export interface ICalculadora {
  width: number;
  height: number;
}
