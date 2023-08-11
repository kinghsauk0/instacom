import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Constant/NavigationStrings';
import Splash from '../Screen/Auth/Splash';
import CreateAC from '../Screen/Auth/CreateAC';
import Login from '../Screen/Auth/Login';

const Stack = createNativeStackNavigator();
export default function AuthNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationStrings.SPLASH} component={Splash} />
      <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={NavigationStrings.CREATEAC} component={CreateAC} />
    </Stack.Navigator>
  );
}
