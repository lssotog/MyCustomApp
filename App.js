import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Camera from './components/Camera';

const Tab = createBottomTabNavigator();

const App = () => {
  const linkingObject = {
    prefixes: ['https://mycustomapp.com', 'mycustomapp://'],
    config: {
      screens: {
        Home: 'home',
        Camera: 'camera',
      },
    },
  };
  return (
    <NavigationContainer
      linking={linkingObject}
      fallback={<Text>Loading...</Text>}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Camera" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
