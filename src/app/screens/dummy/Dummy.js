// @flow
import * as React from 'react';
import push from 'helpers/history/push';
import { DUMMY_TWO } from 'constants/routes/routeNames';
import T from 'helpers/i18n/Translate';
import type { DummyProps } from './DummyTypes';

// eslint-disable-next-line
class Dummy extends React.Component<DummyProps> {
  render() {
    const {
      Text, Button, View, Image, dummyField,
    } = this.props;

    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };

    return (
      <View>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text>This is page 1.</Text>
        <Text>{dummyField}</Text>
        <Text>{T.get('DUMMY')}</Text>
        <Button
          onClick={() => { push(this.props, DUMMY_TWO); }}
          text="Go to page2."
          primary
          raised
        />
      </View>
    );
  }
}

export default Dummy;
