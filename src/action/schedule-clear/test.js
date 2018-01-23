jest.useFakeTimers();

import scheduleClear from './';

test('generates action to schedule clearing user notification', () => {
  const action = scheduleClear();
  const dispatch = jest.fn();
  action(dispatch);
  jest.runAllTimers();
  expect(dispatch.mock.calls[0][0]).toMatchSnapshot();
});
