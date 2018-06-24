// @flow
import React from 'react';
import type { ImageProps } from './types';

const Button = (props: ImageProps) => {
  const { source, alt, ...other } = props;
  return (
    <img
      src={source.uri}
      alt={alt || 'image'}
      {...other}
    />
  );
};

export default Button;
