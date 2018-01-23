import updateMessage from './';

test('generates action with given message', () => {
  expect(updateMessage('message')).toMatchSnapshot();
});
