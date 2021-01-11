import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Camera from './components/Camera';

const Tab = createBottomTabNavigator();

const App = () => {
  const linkingObject = {
    prefixes: ['https://app.example.com'],
  };
  return (
    <NavigationContainer linking={linkingObject}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
