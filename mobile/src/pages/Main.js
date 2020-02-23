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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackNavigator = ({ navigation, route })=>{
  // deixa invisivel a tab navigation
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    })
  }
  return(
    <HomeStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
      }}
      headerMode="float"
      animation="fade"
    >
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Details" component={DetailsScreen}/>
    </HomeStack.Navigator>
  )
}

const HomeTabNavigator = ({ navigation, route }) => {
  return(
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#fff',
      style: {
        backgroundColor: '#7D40E7',
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
      <Tab.Screen name="Home" component={HomeStackNavigator}/>
      <Tab.Screen name="Feed" component={FeedScreen}/>
      <Tab.Screen name="Map" component={Maps}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  );
};

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Home';

  switch (routeName) {
    case "Home":
    return "Home";
    case "Feed":
    return "Feed";
    case "Map":
    return "Map";
    case "Settings":
    return "Settings";
  }
};

function shouldHeaderBeShown(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Home';

  switch (routeName) {
    case "Home":
    return false;
  }
};

export default function Main() {
  return <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
      }}
      headerMode="float"
      animation="fade"
    >
      <Stack.Screen 
      options={({route})=>({
        title:getHeaderTitle(route),
        headerShown: shouldHeaderBeShown(route)
      })} 
      name="Home" component={HomeTabNavigator}/>
      <Stack.Screen name="Settings" component={SettingsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>;
}
