import {View, Text, Image} from 'react-native';
import React from 'react';
import Color from '../Constant/Color';

export default function Appheader() {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        backgroundColor: Color.DEEPPINK,
        justifyContent: 'center',
        paddingLeft: '10%',
      }}>
      <Image
        style={{
          width: 60,
          height: 60,
        }}
        source={require('../Image/shopping.png')}
      />
    </View>
  );
}
