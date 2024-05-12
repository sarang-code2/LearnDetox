import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from '../../components';
import {useSignInMutation} from '../../store/services/signInApi';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth} from '../../store/slices/authSlice';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const [signIn, {data, isLoading, isSuccess}] = useSignInMutation();
  const {token, auth} = useSelector(state => state.auth);

  // console.log('auth is', auth);

  const handleLogin = async () => {
    await signIn({email, password});
  };

  // setToken to redux store
  useEffect(() => {
    if (isSuccess) {
      dispatch(setAuth(data?.response?.records));
      navigation.navigate('Profile');
    }
  }, [isSuccess, data?.response?.records, dispatch, navigation]);

  return (
    <View>
      <Input
        onChangeText={onChangeEmail}
        placeholder="e.g, johnson@gmail.com"
      />
      <Input onChangeText={onChangePassword} placeholder="**********" />
      <Button
        onPress={handleLogin}
        style={{backgroundColor: 'green', padding: 10}}>
        <Text>Login</Text>
      </Button>

      <Text>Don't have an account? </Text>
      <Button
        onPress={() => navigation.navigate('Register')}
        style={{backgroundColor: 'blue', padding: 10}}>
        <Text>
          {isLoading && <Text>Loading</Text>}
          {!isLoading && <Text>Register</Text>}
        </Text>
      </Button>
    </View>
  );
};

export default Login;
