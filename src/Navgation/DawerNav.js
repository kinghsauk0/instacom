import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigationStrings from '../Constant/NavigationStrings';
import Profile from '../Screen/Home/Profile';

const Drawer = createDrawerNavigator();
export default function DawerNav() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={NavigationStrings.PROFILE} component={Profile} />
    </Drawer.Navigator>
  );
}
