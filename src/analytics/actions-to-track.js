import messageSent from './custom-event/message-sent';
import messageDelivered from './custom-event/message-delivered';

export default {
  // '@@router/LOCATION_CHANGE': virtualPageView,
  ...messageSent,
  ...messageDelivered
};
