import styled from 'styled-components';

const TextInput = styled.input.attrs({ type: 'text' })`
  background: ${props => (props.disabled ? '#eee' : 'papayawhip')};
  border: none;
  border-radius: 3px;
  color: palevioletred;
  font-size: 1.5em;
  margin: 0.5em;
  padding: 0.5em;
`;

export default TextInput;
