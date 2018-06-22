import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'ui/native';

describe('src/app/ui/View/Native.js', () => {
  it('Render: props: { children: DummyText }', () => {
    const wrapper = shallow(<View />);
    expect(wrapper).toMatchSnapshot();
  });
});
