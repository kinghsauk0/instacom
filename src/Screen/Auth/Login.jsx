import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../Constant/Color';
import Lable from '../../Components/Lable';
import NavigationStrings from '../../Constant/NavigationStrings';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eay, setEay] = useState(true);

  const FireBaseLogin = async () => {
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(querySnapsho => {
        const fireData = querySnapsho._docs[0]._data;
        storeData(fireData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('user', value.user);
      await AsyncStorage.setItem('email', value.email);
      await AsyncStorage.setItem('fullName', value.fullName);
      await AsyncStorage.setItem('password', value.password);
    } catch (e) {
      // saving error
    }
  };
  const nextPage = async () => {
    try {
      const passwordData = await AsyncStorage.getItem('password');
      if (passwordData !== null) {
        if (passwordData == password) {
          navigation.navigate(NavigationStrings.HOME);
        } else {
          Alert.alert('password wrong');
        }
      }
    } catch (error) {}
  };

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
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Lable lable="Password" />
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
          placeholder="Enter your  password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={eay}
        />
        <TouchableOpacity
          onPress={() => setEay(false)}
          style={{
            position: 'absolute',
            right: 10,
            bottom: 15,
          }}>
          {eay ? (
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={require('../../Image/view.png')}
            />
          ) : (
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={require('../../Image/invisible.png')}
            />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          FireBaseLogin();
          nextPage();
        }}
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
