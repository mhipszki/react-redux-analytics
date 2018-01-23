export const MESSAGE_DELIVERED = 'MESSAGE_DELIVERED';

const messageDelivered = () => ({
  type: MESSAGE_DELIVERED,
  timestamp: Date.now()
});

export default messageDelivered;
