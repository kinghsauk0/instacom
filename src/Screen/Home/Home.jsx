import {View, Text} from 'react-native';
import React from 'react';
import Appheader from '../../Components/Appheader';
import Color from '../../Constant/Color';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.WHITE,
      }}>
      <Appheader />
    </View>
  );
}
