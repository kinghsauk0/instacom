import {View, Text} from 'react-native';
import React from 'react';
import Color from '../Constant/Color';

const Lable = ({lable}) => {
  return (
    <View
      style={{
        height: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '10%',
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: Color.BLACK,
        }}>
        {lable}
      </Text>
    </View>
  );
};

export default Lable;
