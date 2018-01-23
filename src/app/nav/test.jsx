import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Nav from './';

test('styles a button element', () => {
  const component = shallow(<Nav />);
  expect(component).toMatchSnapshot();
});

test('has different styling when disabled', () => {
  const component = shallow(<Nav disabled />);
  expect(component).toMatchSnapshot();
});
