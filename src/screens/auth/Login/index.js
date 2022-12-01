import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {scale} from '../../../utils/responsive';
import {COLORS} from '../../../utils/colors';
import CInput from '../../../components/CInput';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState();

  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (initializing) setInitializing(false);
    user ? navigation.navigate('Home') : null
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);


  const login = () => {
    auth()
      .signInWithEmailAndPassword(userName, password)
      .then(() => {
        navigation.navigate('Home')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" duration={2000}>
        <Text style={styles.heading}>Just Share</Text>
        <Text style={styles.heading}>Login</Text>

        {/* jello */}
        <Animatable.View
          animation={'jello'}
          delay={2000}
          onAnimationBegin={() => console.log('Anim start')}>
          <CInput
            placeholder="Enter Your User Name"
            onChangeText={txt => setUserName(txt)}
          />
        </Animatable.View>
        <Animatable.View
          animation={'jello'}
          delay={2000}
          onAnimationBegin={() => console.log('Anim start')}>
          <CInput
            placeholder="Enter Your Password"
            onChangeText={txt => setPassword(txt)}
          />
        </Animatable.View>

        <View style={styles.linkContainer}>
          <Text>Don't Have Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkTxt}>Click Here</Text>
          </TouchableOpacity>
        </View>

        <Button title="Sign Up" onPress={login} />
      </Animatable.View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  input: {
    padding: scale(8),
    borderBottomWidth: scale(0.5),
    borderBottomColor: 'black',
    marginBottom: scale(10),
    backgroundColor: 'snow',
  },
  buttonContainer: {
    backgroundColor: 'purple',
    padding: scale(12),
    width: scale(280),
  },
  heading: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: scale(24),
    textAlign: 'center',
    marginBottom: scale(10),
    textTransform: 'uppercase',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: scale(4),
  },
  linkTxt: {
    color: COLORS.purple,
    fontWeight: 'bold',
    fontSize: scale(16),
  },
});
