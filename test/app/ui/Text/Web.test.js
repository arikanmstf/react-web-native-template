import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'ui';

describe('src/app/ui/Text/Web.js', () => {
  it('Render: props: { children: DummyText }', () => {
    const wrapper = shallow(<Text>DummyText</Text>);
    expect(wrapper).toMatchSnapshot();
  });
});
