import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

import perfil from '../assets/perfilPet.png';

import api from '../services/api';

export default function HomeScreen({ navigation }) {
  const adotado = 'false';
  let reverseData;
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;
    console.log(pageNumber);
    setLoading(true);

    const response = await api.get(`/spot`,{
      params: {
        adotado,
        _page: pageNumber,
       }
    })
    reverseData = response.data.reverse();
    console.log(reverseData[0]);
    console.log(pageNumber);

    setTotal(Math.floor(reverseData.length / 2)); // 2 para teste
    setFeed(shouldRefresh ? reverseData : [...feed, ...reverseData]);console.log(total);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={feed}
        keyExtractor={post => post._id}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={loading && <ActivityIndicator size="small" color="#999"
        style={styles.load} />}
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

  load: {
    margin: 30
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