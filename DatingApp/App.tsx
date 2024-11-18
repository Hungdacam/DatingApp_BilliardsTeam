import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from './assets/screens/Login'
import ProfileCard from './assets/screens/ProfileCard'
<<<<<<< HEAD
import AccountSetting from './assets/screens/AccountSetting';
=======
import FilterProfile from './assets/screens/FilterProfile'
import EditProfile from './assets/screens/EditProfile';
import ChatScreen from './assets/screens/ChatScreen';
>>>>>>> af011ad7d3fdbc428098b1dd90dafb654bd1041a

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AccountSetting">
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
        <Stack.Screen
<<<<<<< HEAD
        name="AccountSetting"
        component={AccountSetting}
=======
        name="FilterProfile"
        component={FilterProfile}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
>>>>>>> af011ad7d3fdbc428098b1dd90dafb654bd1041a
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

