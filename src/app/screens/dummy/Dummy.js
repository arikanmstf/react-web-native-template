// @flow
import React from 'react';
import push from 'helpers/history/push';
import { DUMMY_TWO } from 'constants/routes/routeNames';
import type { DummyProps } from './DummyTypes';

const Dummy = (props: DummyProps) => {
  const {
    Text, Button, View, dummyField,
  } = props;

  return (
    <View>
      <Text>This is page 1.</Text>
      <Text>state.dummy.dummyField: {dummyField} </Text>
      <Button
        onClick={() => { push(props, DUMMY_TWO); }}
        text="Go to page2."
        primary
        raised
      />
    </View>
  );
};

export default Dummy;
