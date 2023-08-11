import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './AuthNav';
import MainNav from './MainNav';

export default function Route() {
  return (
    <NavigationContainer>{false ? MainNav() : AuthNav()}</NavigationContainer>
  );
}
