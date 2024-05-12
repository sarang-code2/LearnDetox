import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, UserProfile} from '../screens';

const Stack = createStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default Authentication;
