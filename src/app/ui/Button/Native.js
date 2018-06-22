// @flow
import React from 'react';
import { Button as NativeButton } from 'react-native-material-ui';
import type { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const {
    onClick, ...other
  } = props;

  return (
    <NativeButton
      onPress={onClick}
      {...other}
    />
  );
};

export default Button;
