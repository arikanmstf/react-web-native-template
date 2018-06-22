import React from 'react';
import { shallow } from 'enzyme';
import App from 'web/App';

describe('src/app/web/App.js', () => {
  it('Render: props: null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
