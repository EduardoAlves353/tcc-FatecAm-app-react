import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, ScrollView, AsyncStorage } from 'react-native';

import SpotList from '../components/SpotList';

export default function List() {
  const [racas, setRacas] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('raca').then(storagedRacas => {
      const racaArraw = storagedRacas.split(',').map(raca => raca.trim());

      setRacas(racaArraw);
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image style={styles.logo} source={logo} /> */}

      <ScrollView>
        {racas.map(raca => <SpotList key={raca} raca={raca} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});