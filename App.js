import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import login from "./s/login"
import Home from "./s/Home"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {

  const MainNavigator= createNativeStackNavigator();
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
    <MainNavigator.Navigator screenOptions={{headerShown:false}}
     initialRouteName = "login">

  
      <MainNavigator.Screen name="Home" component =  {Home}/>
      <MainNavigator.Screen name="login" component={login}/>
      </MainNavigator.Navigator>
    </NavigationContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
