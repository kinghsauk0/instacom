import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Color from '../../Constant/Color';
import NavigationStrings from '../../Constant/NavigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  const getData = async () => {
    try {
      const storData = await AsyncStorage.getItem('user');
      if (storData !== null) {
        navigation.navigate(NavigationStrings.HOME);
      } else {
        navigation.navigate(NavigationStrings.LOGIN);
      }
    } catch (e) {
      console.log('error');
    }
  };

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
