import {View, Text, Dimensions, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import Color from '../Constant/Color';

const {Width, Hight} = Dimensions.get('window');
export default function Alert({visible, onPress}) {
  return (
    <Modal visible={visible} transparent={true}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          height: Hight,
          width: Width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 200,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.DEEPPINK,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: Color.BLACK,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Please Check Data!
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
