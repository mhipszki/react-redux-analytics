import sendMessageSuccess from './';

test('indicates message was sent successfully', () => {
  Date.now = jest.fn(() => 1234567890);
  expect(sendMessageSuccess()).toMatchSnapshot();
});
