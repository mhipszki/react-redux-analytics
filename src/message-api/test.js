jest.useFakeTimers();

import { send } from './';

test('responds to requests by sending back received message as a confirmation', () => {
  const message = 'message to be sent';
  const response = send(message);
  jest.runAllTimers();
  return expect(response).resolves.toEqual({ message });
});
