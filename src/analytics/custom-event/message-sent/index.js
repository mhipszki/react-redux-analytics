/*
  GTM `message_sent` Custom Event definition

  The message being sent to API to be extracted via a Data Layer Variable:

    `message.text`

  The timestamp of sending  to be extracted via a Data Layer Variable

    `message.timestamp`

*/
import { MESSAGE_SENT } from 'src/action/message-sent';

export const transform = (state, action) => ({
  event: 'message_sent',
  message: {
    text: state.message.text,
    timestamp: new Date(action.timestamp).toDateString()
  }
});

// the exported object will be merged into the final actions-to-track mapping
export default {
  [MESSAGE_SENT]: transform
};
