import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from './assets/screens/Login'
import ProfileCard from './assets/screens/ProfileCard'

import AccountSetting from './assets/screens/AccountSetting';

import FilterProfile from './assets/screens/FilterProfile'
import EditProfile from './assets/screens/EditProfile';
import ChatScreen from './assets/screens/ChatScreen';
import DetailProfile from './assets/screens/DetailProfile';
import MatchNotification from './assets/screens/MatchNotification';
import SwiperProfile from './assets/screens/SwiperProfile';
import MatchFound from './assets/screens/MatchFound';
import ListChat from './assets/screens/ListChat';
type RootStackParamList = {
  Login: undefined; // Nếu màn hình không cần tham số
  ProfileCard: undefined; // Hoặc { userId: string } nếu có tham số
  AccountSetting:undefined;
  FilterProfile:undefined;
  EditProfile:undefined;
  ChatScreen:undefined;
  DetailProfile:undefined;
  MatchNotification:undefined;
  SwiperProfile:undefined;
  MatchFound:undefined;
  ListChat:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
        name="AccountSetting"
        component={AccountSetting}
        options={{headerShown:false}}
        />
        <Stack.Screen
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
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="DetailProfile"
        component={DetailProfile}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="MatchNotification"
        component={MatchNotification}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="SwiperProfile"
        component={SwiperProfile}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="MatchFound"
        component={MatchFound}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="ListChat"
        component={ListChat}
        options={{headerShown:false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

