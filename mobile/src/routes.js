import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import Main from './pages/Main';
import Maps from './pages/Maps';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: ({ navigation })=>({
        headerShown: false,// tem que tirar para funcionar os debaixo
        title: 'Titulo para Main',
        headerTitleAlign: 'center',
        headerRight:  () => (<View>
          <TouchableHighlight onPress={()=>navigation.navigate('Maps')}>
          <Text style={{ color: '#fff' }} 
          >Map  </Text>
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
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#7D40E7',
      },
      gestureEnabled: true,
      gestureDirection: "horizontal",
      ...TransitionPresets.SlideFromRightIOS,
    },
  })
);

export default Routes;