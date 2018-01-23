import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Button from './';

test('styles a button element', () => {
  const component = shallow(<Button />);
  expect(component).toMatchSnapshot();
});

test('has different styling when disabled', () => {
  const component = shallow(<Button disabled />);
  expect(component).toMatchSnapshot();
});
