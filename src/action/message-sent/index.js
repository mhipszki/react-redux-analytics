export const MESSAGE_SENT = 'MESSAGE_SENT';

const messageSent = () => ({
  type: MESSAGE_SENT,
  timestamp: Date.now()
});

export default messageSent;
