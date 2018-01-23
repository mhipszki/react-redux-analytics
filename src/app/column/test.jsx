import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Column from './';

test('styles a div element as a flexbox column', () => {
  const component = shallow(<Column />);
  expect(component).toMatchSnapshot();
});
