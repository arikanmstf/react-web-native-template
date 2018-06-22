// @flow
import React from 'react';
import type { TextProps } from './types';

const Text = (props: TextProps) => {
  const { children } = props;
  return (
    <span>
      {children}
    </span>
  );
};

export default Text;
