import {View, Text, Modal, ActivityIndicator, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Color from '../Constant/Color';

const {Hight, Width} = Dimensions.get('window');
export default function Loder({visible}) {
  return (
    <Modal visible={visible}>
      <View
        style={{
          flex: 1,
          height: Hight,
          width: Width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: Color.WHITE,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <ActivityIndicator color={Color.DEEPPINK} size="large" />
        </View>
      </View>
    </Modal>
  );
}
