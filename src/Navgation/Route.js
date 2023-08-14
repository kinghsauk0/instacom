import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../Screen/Auth/Splash';
import Login from '../Screen/Auth/Login';
import CreateAC from '../Screen/Auth/CreateAC';
import Home from '../Screen/Home/Home';
import NavigationStrings from '../Constant/NavigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={NavigationStrings.SPLASH} component={Splash} />
        <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
        <Stack.Screen name={NavigationStrings.CREATEAC} component={CreateAC} />
        <Stack.Screen name={NavigationStrings.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
