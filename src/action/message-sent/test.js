import messageSent from './';

test('generates action to indicate start of message sending', () => {
  Date.now = jest.fn(() => 1234567890);
  expect(messageSent()).toMatchSnapshot();
});
