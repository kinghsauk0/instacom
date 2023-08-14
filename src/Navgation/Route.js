import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './MainNav';
import Splash from '../Screen/Auth/Splash';
import AuthNav from './AuthNav';

export default function Route() {
  return (
    <NavigationContainer>
      {true ? <AuthNav /> : <MainNav />}
    </NavigationContainer>
  );
}
