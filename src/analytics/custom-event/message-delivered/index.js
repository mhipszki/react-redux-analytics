/*
  GTM `message_delivered` Custom Event definition

  The message sent to API to be extracted via a Data Layer Variable:

    `message.text`

  The timestamp of delivery to be extracted via a Data Layer Variable

    `message.timestamp`

  The duration of delivery to be extracted via a Data Layer Variable

    `message.duration`

*/
import { MESSAGE_DELIVERED } from 'src/action/message-delivered';

export const transform = (state, action) => ({
  event: 'message_delivered',
  message: {
    text: state.message.text,
    timestamp: new Date(action.timestamp).toDateString(),
    duration: `${state.message.sentIn}ms`
  }
});

// the exported object will be merged into the final actions-to-track mapping
export default {
  [MESSAGE_DELIVERED]: transform
};
