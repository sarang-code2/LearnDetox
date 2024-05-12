import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './InputStyle';

const Input = ({...props}) => {
  return <TextInput style={styles.input} {...props} />;
};

export default Input;
