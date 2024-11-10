import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from './assets/screens/Login'
import ProfileCard from './assets/screens/ProfileCard'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileCard">
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="ProfileCard"
        component={ProfileCard}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

