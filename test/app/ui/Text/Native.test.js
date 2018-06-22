import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'ui/native';

describe('src/app/ui/Text/Native.js', () => {
  it('Render: props: { children: DummyText }', () => {
    const wrapper = shallow(<Text>DummyText</Text>);
    expect(wrapper).toMatchSnapshot();
  });
});
