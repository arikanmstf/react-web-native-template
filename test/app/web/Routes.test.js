import React from 'react';
import { shallow } from 'enzyme';
import Routes from 'web/Routes';

describe('src/app/web/Routes.js', () => {
  it('Render: props: null', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
