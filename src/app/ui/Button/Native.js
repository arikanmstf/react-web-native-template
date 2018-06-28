// @flow
import React from 'react';
import { Button as NativeButton } from 'react-native-material-ui';

import type { Node } from 'react';
import type { ButtonProps } from './types';

const Button = (props: ButtonProps): Node => {
  const {
    onClick, ...other
  } = props;

  const foo = () => {};
  const onPress = onClick || foo;

  return (
    <NativeButton
      onPress={onPress}
      {...other}
    />
  );
};

export default Button;
