import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Color from '../../Constant/Color';
import Lable from '../../Components/Lable';
import NavigationStrings from '../../Constant/NavigationStrings';

export default function CreateAC({navigation}) {
  return (
    <ScrollView
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: Color.WHITE,
      }}>
      <View
        style={{
          height: 100,
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: '10%',
          marginBottom: 70,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: Color.DEEPPINK,
          }}>
          Login
        </Text>
        <Text
          style={{
            color: Color.BLACK,
            fontWeight: '500',
          }}>
          Let's Login your account
        </Text>
      </View>
      <Lable lable="Email" />
      <View
        style={{
          height: 50,
          width: '90%',
          backgroundColor: Color.GEAY,
          borderRadius: 5,
          marginBottom: 25,
          alignSelf: 'center',
        }}>
        <TextInput
          style={{
            color: Color.BLACK,
            fontSize: 15,
            paddingLeft: 20,
          }}
          placeholder="Enter your  Email"
          //value={value}
          //onChangeText={onChangeText}
          //keyboardType={keyboardType}
          //secureTextEntry={secureTextEntry}
        />
      </View>
      <Lable lable="Password" />
      <View
        style={{
          height: 50,
          width: '90%',
          backgroundColor: Color.GEAY,
          borderRadius: 5,
          marginBottom: 110,
          alignSelf: 'center',
        }}>
        <TextInput
          style={{
            color: Color.BLACK,
            fontSize: 15,
            paddingLeft: 20,
          }}
          placeholder="Enter your email password"
          //value={value}
          //onChangeText={onChangeText}
          //keyboardType={keyboardType}
          //secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            bottom: 15,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require('../../Image/view.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        //onPress={() => navigation.navigate(NavigationStrings.HOME)}
        style={{
          height: 50,
          backgroundColor: Color.DEEPPINK,
          borderRadius: 5,
          marginBottom: 25,
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          alignSelf: 'center',
          marginTop: 70,
        }}>
        <Text
          style={{
            color: Color.WHITE,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Log in
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 40,
          width: '90%',
          marginTop: 20,
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'flex-end',
          marginRight: '10%',
        }}>
        <Text
          style={{
            fontWeight: '800',
          }}>
          To Create account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.CREATEAC)}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require('../../Image/arrow.png')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
