import React from 'react';
import styled from 'styled-components';

const isBold = text => text.startsWith('*') && text.endsWith('*');
const fontWeight = props => (props.isBold ? 'bold' : 'normal');
const removeFormatting = text => text.substr(1, text.length - 2);

const Line = ({ className, text }) => {
  return <h2 className={className}>{text}</h2>;
};

export default styled(Line).attrs({
  text: props =>
    isBold(props.children) ? removeFormatting(props.children) : props.children,
  isBold: props => isBold(props.children)
})`
  font-size: 1.5rem;
  font-weight: ${fontWeight};
  margin-top: 0;
  color: #777;
`;
