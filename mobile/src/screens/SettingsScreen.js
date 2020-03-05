import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function SettingsScreen({ navigation }) {
  const isFocused = useIsFocused();
  navigation.setOptions({
    headerRight: ()=>(
      <Button title="Save" onPress={()=>{
        navigation.replace('Settings');
      }}/>
    )
  });

  function logof() {
    AsyncStorage.setItem('user', '');
    // navigation.navigate('Login');
  }

  return(
    <View style={styles.container}>
      <Text style={{color:isFocused?'green':'black'}}>SettingsScreen</Text>
      <Button title="Go to Home Screen" 
      onPress={()=>navigation.goBack()}/>

        <TouchableOpacity onPress={() => logof}>
          <Text style={styles.logof}>Deslogar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#7D40E7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logof: {
    color: 'red',
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 40,
  },
});