import clearSendingInfo from 'src/action/clear-sending-info';

const scheduleClear = () => dispatch => {
  setTimeout(() => dispatch(clearSendingInfo()), 2000);
};

export default scheduleClear;
