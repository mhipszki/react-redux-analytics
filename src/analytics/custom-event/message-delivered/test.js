import { transform } from './';

test('constructs `message_delivered` payload to be pushed to data layer', () => {
  const state = {
    message: {
      text: 'message text',
      sentIn: 1234
    }
  };
  const action = { timestamp: 1234567890 };
  expect(transform(state, action)).toMatchSnapshot();
});
