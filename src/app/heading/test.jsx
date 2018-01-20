import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Heading from './';

test('styles an h1 element', () => {
  const component = shallow(<Heading />);
  expect(component).toMatchSnapshot();
});
