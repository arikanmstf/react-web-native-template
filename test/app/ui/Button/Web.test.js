import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'ui';

describe('src/app/ui/Button/Web.js', () => {
  it('Render: props: { text }', () => {
    const props = {
      test: 'dummyText',
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render: props: { primary }', () => {
    const props = {
      primary: true,
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render: props: { raised }', () => {
    const props = {
      raised: true,
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render: props: { onPress }', () => {
    const props = {
      onPress: jest.fn(() => {}),
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
