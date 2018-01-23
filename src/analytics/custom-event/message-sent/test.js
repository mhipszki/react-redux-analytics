import { transform } from './';

test('constructs `message_sent` payload to be pushed to data layer', () => {
  const state = {
    message: {
      text: 'message text'
    }
  };
  const action = { timestamp: 1234567890 };
  expect(transform(state, action)).toMatchSnapshot();
});
