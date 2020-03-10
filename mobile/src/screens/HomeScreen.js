import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

import perfil from '../assets/perfilPet.png';

import api from '../services/api';

export default function HomeScreen({ navigation }) {
  const [feed, setFeed] = useState([]);
  const adotado = 'false';

  useEffect(() => {
    async function loadFeed() {
      const response = await api.get('/spot',{
        params: {
          adotado,
         }
      })

      setFeed(response.data.reverse());
    }

    loadFeed();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList 
        data={feed}
        keyExtractor={post => post._id}
        // onEndReached={() => loadPage()}
        // onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <View style={styles.header}>
              <Image style={styles.avatar} source={perfil} />
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.company}>{item.company}</Text>
              </TouchableOpacity>
            </View>
            <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  bold: {
    fontWeight: 'bold'
  },

  list: {
    backgroundColor: '#fff',
    marginBottom: 5,
  },

  listItem: {
    marginRight: 15,
  },

  thumbnail: {
    aspectRatio: 3/2,
    resizeMode: 'contain',
    borderRadius: 2,
    backgroundColor: '#f5f5f5',
    marginRight: 2,
    marginLeft: 2,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },

  company: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  descricao: {
    fontSize: 15,
    color: '#999',
    padding: 10,
    lineHeight: 18,
  },

  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});