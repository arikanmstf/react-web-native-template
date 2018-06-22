// @flow
import React from 'react';
import type { DummyProps } from './DummyTypes';

const Dummy = (props: DummyProps) => {
  const {
    Text, Button, View, dummyField, dummyFieldTwo, changeField,
  } = props;

  return (
    <View>
      <Text>This is page 2.</Text>
      <Text>state.dummy.dummyField:{dummyField}</Text>
      <Text>state.dummy.dummyFieldTwo: {dummyFieldTwo} </Text>
      <Button
        onClick={() => { changeField('HelloWorld !'); }}
        text="Change DummyField to `HelloWorld !`"
        primary
        raised
      />
    </View>
  );
};

export default Dummy;
