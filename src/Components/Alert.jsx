import {View, Text, Modal, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../Constant/Color';

const {Width, Hight} = Dimensions.get('window');
export default function Alert() {
  return (
    <Modal visible={true}>
      <View
        style={{
          height: Hight,
          width: Width,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Color.WHITE,
        }}>
        <TouchableOpacity
          //onPress={() => setTouch(false)}
          style={{
            height: 200,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.DEEPPINK,
          }}>
          <Text
            style={{
              color: Color.BLACK,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Please Chck Data
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
