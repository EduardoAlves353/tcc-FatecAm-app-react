import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>FeedScreen</Text>
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