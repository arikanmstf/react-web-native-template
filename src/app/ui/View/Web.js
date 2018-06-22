// @flow
import React from 'react';
import styled from 'styled-components';
import type { ViewProps } from './types';
import ViewStyle from './style.json';

const Aligner = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;

const Div = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;

const View = (props: ViewProps) => {
  const { style, ...other } = props;
  const mergedStyles = {
    ...ViewStyle,
    ...style,
  };

  return (
    <Aligner>
      <Div
        style={mergedStyles}
        {...other}
      />
    </Aligner>
  );
};

export default View;
