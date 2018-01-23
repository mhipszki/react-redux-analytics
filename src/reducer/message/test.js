import reducer from './';
import messageSent from 'src/action/message-sent';
import messageDelivered from 'src/action/message-delivered';
import updateMessage from 'src/action/update-message';
import clearSendingInfo from 'src/action/clear-sending-info';

test('updates message text when changes', () => {
  const state = {};
  const action = updateMessage('new message');
  expect(reducer(state, action)).toMatchObject({
    text: 'new message'
  });
});

test('captures timestamp when message was sent', () => {
  const state = {};
  const action = messageSent();
  action.timestamp = 1234567890;
  expect(reducer(state, action)).toMatchObject({
    sentAt: 1234567890,
    isBeingSent: true
  });
});

test('calculates time taken to send message', () => {
  const state = { sentAt: 100 };
  const action = messageDelivered();
  action.timestamp = 110;
  expect(reducer(state, action)).toMatchObject({
    sentIn: 10,
    isBeingSent: false
  });
});

test('clears sending related info', () => {
  const state = { sentAt: 100, sentIn: 10 };
  const action = clearSendingInfo();
  expect(reducer(state, action)).toMatchObject({
    sentAt: undefined,
    sentIn: undefined
  });
});
