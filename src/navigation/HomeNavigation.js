import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/Login';
import RegisterScreen from '../screens/auth/Register';
import HomeScreen from '../screens/Home';
const HomeNavigation = () => {
    
const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
        headerShown:!true
    }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})