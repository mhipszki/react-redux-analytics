import React from 'react';
import { shallow } from 'enzyme';

import { Form } from './';

test('renders a text input and a button', () => {
  const component = shallow(<Form />);
  expect(component).toMatchSnapshot();
});

test('runs callback when text input changes', () => {
  const onTextChange = jest.fn();
  const component = shallow(<Form onTextChange={onTextChange} />);
  const textInput = component.find('text-input__TextInput');
  const event = { type: 'change' };
  textInput.simulate('change', event);
  expect(onTextChange).toHaveBeenCalledWith(event);
});

test('runs callback when message is sent', () => {
  const onButtonClick = jest.fn();
  const component = shallow(<Form onButtonClick={onButtonClick} />);
  const button = component.find('button__Button');
  const event = { type: 'click' };
  button.simulate('click', event);
  expect(onButtonClick).toHaveBeenCalledWith(event);
});

test('disables text input and button while message is being sent', () => {
  const component = shallow(<Form isSending />);
  const textInput = component.find('text-input__TextInput');
  const button = component.find('button__Button');
  expect(textInput.props().disabled).toBe(true);
  expect(button.props().disabled).toBe(true);
});

test('notifies user that message is being sent', () => {
  const component = shallow(<Form isSending />);
  const heading = component.find('heading__Heading');
  expect(heading.render().text()).toBe('Sending message...');
});

test('notifies user that message has been delivered', () => {
  const component = shallow(<Form sentIn={1234} />);
  const heading = component.find('heading__Heading');
  expect(heading.render().text()).toBe('Message was sent in 1234ms');
});
