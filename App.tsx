import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

const App = () => (
  <NavigationContainer>
    <StatusBar />
    <HomeScreen />
  </NavigationContainer>
);

export default App;
