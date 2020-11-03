import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const App = () => {

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 10);
    alert(number);
  }

  return (
    <View style={styles.app__container}>
      <Text style={styles.container__title}>Gerador de Números Randômicos:</Text>
      <Button onPress={generateNumber} title='Gerar número' />
    </View>
  );
};

const styles = StyleSheet.create({
  app__container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container__title: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default App;