import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Maps from './Maps';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FeedScreen from '../screens/FeedScreen';
import DetailsScreen from '../screens/DetailsScreen';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation, route}) => {
  // deixa invisivel a tab navigat
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    })
  }
  return(
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
      }}
      headerMode="float"
      animation="fade">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>
  );
}

const MainTabs = (props) => {
  return(
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: '#c7a4ff',
      // showLabel: focused?true:false,
      style: {
        backgroundColor: '#7D40E7',
        borderColor: '#fff',
        borderWidth: 2,
        borderTopWidth: 4,
        borderRadius: 4,
      },
      
    }}
    screenOptions={({route}) => ({
      tabBarIcon:({color, size}) =>{
        let iconName
        if (route.name == 'Home') {
          iconName = 'ios-home'
        } else if (route.name == 'Feed') {
          iconName = 'logo-rss'
        } else if (route.name == 'Map') {
          iconName = 'ios-map'
        } else if (route.name == 'Settings') {
          iconName = 'ios-settings'
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      },
    })}
    >
      <Tab.Screen name="Home" component={HomeStack}/>
      <Tab.Screen name="Feed" component={FeedScreen}/>
      <Tab.Screen name="Map" component={Maps}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  );
}

export default function Main() {
  return( <NavigationContainer>
    <MainTabs/>
  </NavigationContainer>
  );
}
