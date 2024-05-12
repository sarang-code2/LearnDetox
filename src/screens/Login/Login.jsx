import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from '../../components';
import {useSignInMutation} from '../../store/services/signInApi';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth} from '../../store/slices/authSlice';

import {useForm} from 'react-hook-form';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const [signIn, {isLoading, isSuccess}] = useSignInMutation();
  const {token, auth} = useSelector(state => state.auth);

  // console.log('auth is', auth);

  const onSubmit = async data => {
    // await signIn({email, password});
    console.log('email is', data.email);
    console.log('password is', data.password);
  };

  // setToken to redux store
  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setAuth(data?.response?.records));
  //     navigation.navigate('Profile');
  //   }
  // }, [isSuccess, data?.response?.records, dispatch, navigation]);
  // }, [isSuccess, data?.response?.records, dispatch, navigation]);

  return (
    <View>
      <Input
        name="email"
        control={control}
        rules={{required: true}}
        placeholder="e.g, johnson@gmail.com"
      />
      {errors.email?.type === 'required' && <Text>First name is required</Text>}
      <Text>First name is required</Text>
      <Input name="password" control={control} placeholder="**********" />
      <Button
        // onPress={handleLogin}
        onPress={handleSubmit(onSubmit)}
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
