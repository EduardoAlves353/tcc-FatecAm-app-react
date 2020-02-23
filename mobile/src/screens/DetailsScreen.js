import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button title="Go to Home Screen" 
      onPress={()=>navigation.goBack()}/>
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
});