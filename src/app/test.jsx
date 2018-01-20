import React from 'react';
import { shallow } from 'enzyme';

import App from './';

test('renders hello world!', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
