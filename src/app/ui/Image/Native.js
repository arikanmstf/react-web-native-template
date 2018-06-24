// @flow
import React from 'react';
import { Image as NativeImage } from 'react-native';
import type { ImageProps } from './types';

const Image = (props: ImageProps) => {
  return (
    <NativeImage
      {...props}
    />
  );
};

export default Image;
