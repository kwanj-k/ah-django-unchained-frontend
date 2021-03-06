import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  it('should render the home route', () => {
    expect(wrapper.find({ path: '/' }).length).toBe(1);
  });
});
