import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Main({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>AdotaPET!!!</Text>
      <Text onPress={() => {
        navigation.navigate('Maps', {
          //aqui é para enviar parametros
        })
      }}>click aqui, Mapa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D40E7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
});

export default Main;