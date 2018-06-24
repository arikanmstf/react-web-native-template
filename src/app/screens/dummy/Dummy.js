// @flow
import React from 'react';
import push from 'helpers/history/push';
import { DUMMY_TWO } from 'constants/routes/routeNames';
import type { DummyProps } from './DummyTypes';

const Dummy = (props: DummyProps) => {
  const {
    Text, Button, View, Image, dummyField,
  } = props;

  const pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };

  return (
    <View>
      <Image source={pic} style={{ width: 193, height: 110 }} />
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
