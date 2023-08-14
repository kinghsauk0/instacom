import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Constant/NavigationStrings';
import Home from '../Screen/Home/Home';
import CreateAC from '../Screen/Auth/CreateAC';
import Splash from '../Screen/Auth/Splash';
import Login from '../Screen/Auth/Login';

const Stack = createNativeStackNavigator();
export default function MainNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
    </Stack.Navigator>
  );
}
