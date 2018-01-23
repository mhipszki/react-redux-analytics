import styled from 'styled-components';

const color = props => (props.disabled ? '#eee' : '#db7093');

const Button = styled.button`
  background: #0000;
  border: 2px solid ${color};
  border-radius: 3px;
  color: ${color};
  cursor: pointer;
  font-size: 1.5em;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default Button;
