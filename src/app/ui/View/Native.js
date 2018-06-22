// @flow
import React from 'react';
import { StyleSheet, View as ViewNative } from 'react-native';
import ViewStyle from './style.json';
import type { ViewProps } from './types';

const View = (props: ViewProps) => {
  const { style, ...other } = props;
  const mergedStyles = StyleSheet.create({
    container: {
      ...ViewStyle,
      ...style,
    },
  });

  return (
    <ViewNative
      style={mergedStyles.container}
      {...other}
    />
  );
};

export default View;
