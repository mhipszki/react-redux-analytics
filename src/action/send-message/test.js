import sendMessage from './';
import { send } from 'src/message-api';
import scheduleClear from 'src/action/schedule-clear';
import { MESSAGE_SENT } from 'src/action/message-sent';
import { MESSAGE_DELIVERED } from 'src/action/message-delivered';

jest.mock('../../message-api', () => ({
  send: jest.fn(() => Promise.resolve())
}));

jest.mock('../schedule-clear', () => jest.fn());

test('sends message using Message API', () => {
  const dispatch = () => {};
  const getState = () => ({ message: 'message to send' });
  const action = sendMessage();
  action(dispatch, getState);
  expect(send).toHaveBeenCalledWith('message to send');
});

test('dispatches MESSAGE_SENT action', () => {
  const dispatch = jest.fn();
  const getState = () => ({ message: 'message to send' });
  const action = sendMessage();
  action(dispatch, getState);
  const { type } = dispatch.mock.calls[0][0];
  expect(type).toBe(MESSAGE_SENT);
});

test('dispatches MESSAGE_DELIVERED action when message sending finished', () => {
  const dispatch = jest.fn();
  const getState = () => ({ message: 'message to send' });
  const action = sendMessage();
  return action(dispatch, getState).then(() => {
    const { type } = dispatch.mock.calls[1][0];
    expect(type).toBe(MESSAGE_DELIVERED);
  });
});

test('dispatches SCHEDULE_CLEAR action when message sending finished', () => {
  const dispatch = jest.fn();
  const getState = () => ({ message: 'message to send' });
  const action = sendMessage();
  return action(dispatch, getState).then(() => {
    // const { type } = dispatch.mock.calls[2][0];
    expect(dispatch).toHaveBeenLastCalledWith(scheduleClear());
  });
});
