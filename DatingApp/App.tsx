import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from './assets/screens/Login'
import ProfileCard from './assets/screens/ProfileCard'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        />
        <Stack.Screen
        name="ProfileCard"
        component={ProfileCard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

