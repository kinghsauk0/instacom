import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../Constant/Color';
import Lable from '../../Components/Lable';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';
import Loder from '../../Components/Loder';
import Alert from '../../Components/Alert';

const userId = uuid.v4();
export default function CreateAC() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confrim, setConfrim] = useState('');
  const [eay, setEay] = useState(true);
  const [loder, setLoder] = useState(false);
  const [onAlert, setOnAlet] = useState(false);
  const navigation = useNavigation();

  const fireBaseData = async () => {
    setLoder(true);
    firestore()
      .collection('Users')
      .doc(userId)
      .set({
        fullName: name,
        user: userId,
        email: email,
        password: password,
        confrimPassword: confrim,
      })
      .catch(error => {
        console.log('Error');
        setLoder(true);
      });
  };
  const validData = () => {
    let valid = true;
    if (name == '') {
      valid = false;
    }
    if (email == '') {
      valid = false;
    }
    if (password == '') {
      valid = false;
    }
    if (confrim == '') {
      valid = false;
    }
    if (password !== confrim) {
      valid = false;
    }
    return valid;
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: Color.WHITE,
      }}>
      <KeyboardAvoidingView>
        <View
          style={{
            height: 100,
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: '10%',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: Color.DEEPPINK,
            }}>
            Create an account
          </Text>
          <Text
            style={{
              color: Color.BLACK,
              fontWeight: '500',
            }}>
            Let's create your account
          </Text>
        </View>
        <Lable lable="Full name" />
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
            value={name}
            onChangeText={setName}
          />
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
        <Lable lable="Confrim Password" />
        <View
          style={{
            height: 50,
            width: '90%',
            backgroundColor: Color.GEAY,
            borderRadius: 5,
            marginBottom: 10,
            alignSelf: 'center',
          }}>
          <TextInput
            style={{
              color: Color.BLACK,
              fontSize: 15,
              paddingLeft: 20,
            }}
            placeholder="Enter your email Comfrim password"
            value={confrim}
            onChangeText={setConfrim}
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
            if (validData()) {
              fireBaseData();
              navigation.goBack();
            } else {
              setName('');
              setEmail('');
              setPassword('');
              setConfrim('');
              setOnAlet(true);
            }
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
            marginTop: 30,
          }}>
          <Text
            style={{
              color: Color.WHITE,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Loder visible={loder} />
        <Alert visible={onAlert} onPress={() => setOnAlet(false)} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
