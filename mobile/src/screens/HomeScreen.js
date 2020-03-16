import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

import perfil from '../assets/perfilPet.png';

import api from '../services/api';

export default function HomeScreen({ navigation }) {
  const adotado = 'false';
  const [d, setD] = useState(false);
  const [reverseData, setReverseData] = useState([]);
  const [ini, setIni] = useState(0);
  const [fim, setFim] = useState(3);

  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;console.log('inicio');
    
    setLoading(true);
    
    const response = await api.get(`/spot`,{
      params: {
        adotado,
        _page: pageNumber,
       }
    });
    // d = response.data.length;
    setTotal(Math.floor((response.data.length / 2)+ 1)); // 2 para teste
    console.log('dddddddddddddddddddddddddddddddddd', total);
    if (d == true) {console.log('if');
      setFeed(shouldRefresh ? reverseData.slice(ini, fim) : [...feed, ...reverseData.slice(ini, fim)]);console.log(reverseData);
      setIni(fim); setFim(fim + 3);
      setPage(pageNumber + 1);console.log(feed);
      setLoading(false);
      return;
    } else {console.log('else');
      setReverseData(response.data.reverse());console.log(reverseData);
      setD(true);console.log(d);
    }console.log('fim');
  }

  useEffect(() => {
    loadPage();
  }, [d]);

  async function refreshList() {
    setRefreshing(true);

    setIni(0); setFim(3);
    setD(false);
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