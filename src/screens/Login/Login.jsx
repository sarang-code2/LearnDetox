import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button, Input} from '../../components';
import {useSignInMutation} from '../../store/services/signInApi';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth} from '../../store/slices/authSlice';

import {Controller, useForm} from 'react-hook-form';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [signIn, {isLoading, isSuccess}] = useSignInMutation();
  const {token, auth} = useSelector(state => state.auth);

  console.log('error is', errors);

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

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholderText="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholderText="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}
      <Button
        // onPress={handleLogin}
        onPress={handleSubmit(onSubmit)}
        style={{backgroundColor: 'green', padding: 10}}>
        <Text>Login</Text>
      </Button>
    </View>
  );
};

export default Login;
