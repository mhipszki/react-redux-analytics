import clearSendingInfo from './';

test('generates action to clear sending related info in store', () => {
  expect(clearSendingInfo()).toMatchSnapshot();
});
