import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'

import appLogo from './src/assets/logo.png';

export default function App() {
  const phrases = [
    'O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.',
    'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre.'
    , 'Só existe um êxito: a capacidade de levar a vida que se quer.', 'A coragem não é ausência do medo; é a persistência apesar do medo.', 'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.'
  ];

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 5);
  }

  const showPhrase = () => {
    Alert.alert('Frase do Dia', phrases[generateRandomNumber()]);
  };


  return (
    <View style={styles.container}>
      <Image source={appLogo}></Image>
      <TouchableOpacity onPress={showPhrase} style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonTitle}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: '#538530',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 24,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
})
