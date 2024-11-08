import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './assets/screens/Login'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{title:'Welcome'}}
        />
        {/* <Stack.Screen 
        name="Profile"
        component={ProfileScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

