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
      loginUser();
    }, 3000);
  }, []);

  const loginUser = async () => {
    const userId = await AsyncStorage.getItem('user');
    if (userId != null) {
      navigation.navigate(NavigationStrings.HOME);
    } else {
      navigation.navigate(NavigationStrings.LOGIN);
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
