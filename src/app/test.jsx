import React from 'react';
import { shallow } from 'enzyme';

import { App } from './';

test('renders prev / next buttons and a page', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
