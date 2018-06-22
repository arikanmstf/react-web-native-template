import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'ui';

describe('src/app/ui/View/Web.js', () => {
  it('Render: props: { children: DummyText }', () => {
    const wrapper = shallow(<View />);
    expect(wrapper).toMatchSnapshot();
  });
});
