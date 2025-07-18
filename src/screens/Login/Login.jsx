import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './LoginStyles';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from '../../components';

const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded credentials
  const HARD_CODED_EMAIL = 'test@example.com';
  const HARD_CODED_PASSWORD = '123456';

  const onSubmit = async formData => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (
        formData.email === HARD_CODED_EMAIL &&
        formData.password === HARD_CODED_PASSWORD
      ) {
        Alert.alert('Login Successful', 'Welcome back!');
        reset();
        navigation.navigate('Home', {
          user: {
            name: 'John Doe',
            email: 'test@example.com',
            picture: 'https://via.placeholder.com/150',
          },
        });
      } else {
        Alert.alert('Login Failed', 'Invalid email or password.');
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Email"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="e.g, test@example.com"
            placeholderTextColor={'#C8C8C8'}
          />
        )}
        name="email"
      />
      {errors.email && <Text>Email is required.</Text>}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Password"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="**************"
            secureTextEntry
            placeholderTextColor={'#C8C8C8'}
          />
        )}
        name="password"
      />
      {errors.password && <Text>Password is required.</Text>}

      <Button style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.loginText}>
          {isLoading ? 'Loading...' : 'Login'}
        </Text>
      </Button>
    </View>
  );
};

export default Login;
