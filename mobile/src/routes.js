import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import Login from './pages/Login';
import Main from './pages/Main';
import Maps from './pages/Maps';
import SpotProfile from './components/SpotProfile';

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: ({ navigation })=>({
        headerShown: false,// tem que tirar para funcionar os debaixo
      }),
    },
    Main: {
      screen: Main,
      navigationOptions: ({ navigation })=>({
        headerShown: false,// tem que tirar para funcionar os debaixo
        title: 'Titulo para Main',
        headerTitleAlign: 'center',
        headerRight:  () => (<View>
          <TouchableHighlight onPress={()=>navigation.navigate('Login')}>
          <Text style={{ color: '#fff' }} 
          >Login  </Text>
          </TouchableHighlight>
        </View>),
        
      }),
    },
    Maps: {
      screen: Maps,
      navigationOptions: {
        title: 'Titulo para o Mapa',
      },
    },
    SpotProfile,
  }, {
    defaultNavigationOptions: {
      // headerTintColor: '#fff',
      // headerStyle: {
      //   backgroundColor: '#7D40E7',
      // },
      gestureEnabled: true,
      gestureDirection: "horizontal",
      ...TransitionPresets.SlideFromRightIOS,// esses tres sao temporario
    },
  })
);

export default Routes;