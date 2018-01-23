import React from 'react';
import { connect } from 'react-redux';

import updateMessage from 'src/action/update-message';
import sendMessage from 'src/action/send-message';

import Column from 'src/app/column';
import Heading from 'src/app/heading';
import Line from 'src/app/line';
import TextInput from 'src/app/text-input';
import Button from 'src/app/button';

const title = 'React / Redux / Analytics demo';
const sendingNotification = 'Sending message...';
const sentNotification = sentIn => `Message was sent in ${sentIn}ms`;
const notification = (isSending, sentIn) =>
  isSending ? sendingNotification : sentIn ? sentNotification(sentIn) : title;

export const Form = ({ onTextChange, onButtonClick, isSending, sentIn }) => (
  <Column>
    <Heading>{notification(isSending, sentIn)}</Heading>
    <Line>Demo time!</Line>
    <TextInput
      placeholder="type your message here"
      onChange={onTextChange}
      disabled={isSending}
    />
    <Button onClick={onButtonClick} disabled={isSending}>
      Send message
    </Button>
  </Column>
);

const mapStateToProps = state => ({
  isSending: state.message.isBeingSent === true,
  sentIn: !state.message.isBeingSent && state.message.sentIn
});

const mapDispatchToProps = dispatch => ({
  onTextChange: e => {
    dispatch(updateMessage(e.target.value));
  },
  onButtonClick: () => dispatch(sendMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
