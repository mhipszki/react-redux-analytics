import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import TextInput from './';

test('styles a text input element', () => {
  const component = shallow(<TextInput />);
  expect(component).toMatchSnapshot();
});

test('has different styling when disabled', () => {
  const component = shallow(<TextInput disabled />);
  expect(component).toMatchSnapshot();
});
