import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './InputStyle';
import {useController} from 'react-hook-form';

// const Input = ({name, control}) => {
const Input = (...props) => {
  // const {field} = useController({
  //   control,
  //   defaultValue: '',
  //   name,
  // });
  return (
    <TextInput
      {...props}
      // value={field.value}
      // onChangeText={field.onChange}
      style={styles.input}
    />
  );
};

export default Input;
