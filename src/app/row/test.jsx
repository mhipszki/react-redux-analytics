import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Row from './';

test('styles a div element as a flexbox row', () => {
  const component = shallow(<Row />);
  expect(component).toMatchSnapshot();
});
