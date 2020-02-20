import React from 'react';
import { StyleSheet, Text, View, Button, Easing } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Maps from './Maps';

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Go to Details Screen" 
      onPress={()=>navigation.navigate('Details')}/>
    </View>
  );
};
const SettingsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  navigation.setOptions({
    headerRight: ()=>(
      <Button title="Save" onPress={()=>{
        navigation.replace('Settings');
      }}/>
    )
  });
  return(
    <View style={styles.container}>
      <Text style={{color:isFocused?'green':'black'}}>SettingsScreen</Text>
      <Button title="Go to Home Screen" 
      onPress={()=>navigation.goBack()}/>
    </View>
  );
};

const FeedScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text>FeedScreen</Text>
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button title="Go to Home Screen" 
      onPress={()=>navigation.goBack()}/>
    </View>
  );
};

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
      <Tab.Screen name="Map" component={Maps}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  );
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeConfig = {
  animation: 'timing',
  config: {
    duration: 400,
    easing: Easing.linear,
  }
};

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Home';

  switch (routeName) {
    case "Home":
    return "Home";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#7D40E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});