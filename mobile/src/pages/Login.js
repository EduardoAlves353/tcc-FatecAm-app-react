import React, { useState, useEffect } from 'react';
import { BackHandler, View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';

import logo from '../assets/logoPet.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //Teste
  AsyncStorage.setItem('raca', 'Golden, Plano, Planta');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main');
      }
    })
  }, []);

  BackHandler.addEventListener('hardwareBackPress', () => {
    return true;
  });

  async function hundleSubmit() {
    const response = await api.post('/session', {
      email
    });

    if (response.data) {
      const { senha } = response.data;
      
      if (response.data && (password === senha)) {
        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);

        navigation.navigate('Main');
      } else {
        alert("SENHA incorretas!")
      }
    } else {
      alert("E-MAIL não cadastrado!")
    }
  }

  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Seu e-mail"
          placeholderTextColor='#999'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>SEU PASSWORD *</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Sua senha"
          placeholderTextColor='#999'
          secureTextEntry={true}
          autoCapitalize='none'
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={hundleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={hundleSubmit}>
          <Text style={styles.cadastro}>Cadastra-se aqui!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 100,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: "bold",
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 4,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 4,
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 16,
  },

  cadastro: {
    color: 'red',
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 15,
  },
});
