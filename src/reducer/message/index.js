import { MESSAGE_SENT } from 'src/action/message-sent';
import { MESSAGE_DELIVERED } from 'src/action/message-delivered';
import { UPDATE_MESSAGE } from 'src/action/update-message';
import { CLEAR_SENDING_INFO } from 'src/action/clear-sending-info';

const reducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return { ...state, text: action.message };
    case MESSAGE_SENT:
      return { ...state, sentAt: action.timestamp, isBeingSent: true };
    case MESSAGE_DELIVERED:
      return {
        ...state,
        sentIn: action.timestamp - state.sentAt,
        isBeingSent: false
      };
    case CLEAR_SENDING_INFO:
      return {
        ...state,
        sentAt: undefined,
        sentIn: undefined
      };
    default:
      return state;
  }
};

export default reducer;
