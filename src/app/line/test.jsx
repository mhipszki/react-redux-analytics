import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Line from './';

test('styles an h2 element', () => {
  const component = shallow(<Line>text</Line>);
  expect(component).toMatchSnapshot();
});
