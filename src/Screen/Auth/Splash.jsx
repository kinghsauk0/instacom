import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Color from '../../Constant/Color';
import NavigationStrings from '../../Constant/NavigationStrings';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NavigationStrings.LOGIN);
    }, 3000);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: 250,
          width: 250,
        }}
        source={require('../../Image/shopping.png')}
      />
    </View>
  );
}
