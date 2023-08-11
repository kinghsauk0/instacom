import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Constant/NavigationStrings';
import DrawerNav from './DrawerNav';
import Home from '../Screen/Home/Home';

const Stack = createNativeStackNavigator();
export default function MainNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
    </Stack.Navigator>
  );
}
