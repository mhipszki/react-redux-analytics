import { send } from 'src/message-api';
import messageSent from 'src/action/message-sent';
import messageDelivered from 'src/action/message-delivered';
import scheduleClear from 'src/action/schedule-clear';

const sendMessage = () => (dispatch, getState) => {
  const { message } = getState();
  dispatch(messageSent());
  return send(message).then(() => {
    dispatch(messageDelivered());
    dispatch(scheduleClear());
  });
};

export default sendMessage;
