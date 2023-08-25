import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Color from '../Constant/Color';

export default function Appheader() {
  const windowHeight = Dimensions.get('screen').height;
  return (
    <View
      style={{
        width: '100%',
        height: windowHeight,
        backgroundColor: Color.DEEPPINK,
        flexDirection: 'row',
        gap: 20,
        paddingTop: 50,
      }}>
      <TouchableOpacity
        style={{
          marginLeft: '5%',
          marginTop: 15,
        }}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={require('../Image/menu.png')}
        />
      </TouchableOpacity>
      <View>
        <Image
          style={{
            width: 60,
            height: 60,
          }}
          source={require('../Image/shopping.png')}
        />
      </View>
    </View>
  );
}
