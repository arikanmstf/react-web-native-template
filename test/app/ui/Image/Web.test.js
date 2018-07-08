import React from 'react';
import { shallow } from 'enzyme';
import { Image } from 'ui';

describe('src/app/ui/Image/Web.js', () => {
  const props = {
    source: {
      uri: 'dummyUri',
    },
  };

  it('Render: props: { source: { uri } }', () => {
    const wrapper = shallow(<Image {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render: props: { alt }', () => {
    const newProps = {
      ...props,
      alt: 'dummyAlt',
    };

    const wrapper = shallow(<Image {...newProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render: props: { style }', () => {
    const newProps = {
      ...props,
      style: { width: '100%' },
    };

    const wrapper = shallow(<Image {...newProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
