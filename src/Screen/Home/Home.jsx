import React, {useEffect} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import Appheader from '../../Components/Appheader';
import Color from '../../Constant/Color';
import {useDispatch} from 'react-redux';
//import { useSelector } from 'react-redux';
import {showProduct} from '../../App/Features/productSlice';

export default function Home() {
  const windowHeight = Dimensions.get('screen').height;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showProduct());
  });
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Color.WHITE,
      }}>
      <Appheader />
      <View
        style={{
          height: windowHeight,
          width: '95%',
          backgroundColor: Color.WHITE,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          alignSelf: 'center',
          position: 'absolute',
          top: 150,
        }}></View>
    </ScrollView>
  );
}
