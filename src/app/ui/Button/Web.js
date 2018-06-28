// @flow
import React from 'react';
import WebButton from '@material-ui/core/Button';

import type { Node } from 'react';
import type { ButtonProps } from './types';

const Button = (props: ButtonProps): Node => {
  const {
    text, primary, raised, ...other
  } = props;
  const color = primary ? 'primary' : undefined;
  const contained = raised ? 'contained' : undefined;

  return (
    <WebButton
      color={color}
      variant={contained}
      {...other}
    >
      {text}
    </WebButton>
  );
};

export default Button;
