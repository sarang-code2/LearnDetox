import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './InputStyle';
import {useController} from 'react-hook-form';

const Input = ({name, control}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      style={styles.input}
    />
  );
};

export default Input;
