import styled from 'styled-components';

const color = props => (props.disabled ? '#eee' : 'palevioletred');

const Nav = styled.button`
  background: ${color};
  border: 2px solid ${color};
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 1.5em;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default Nav;
