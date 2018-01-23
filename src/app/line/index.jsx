import React from 'react';
import styled from 'styled-components';

const isBold = text => text.startsWith('*') && text.endsWith('*');
const fontWeight = props => (props.isBold ? 'bold' : 'normal');
const removeFormatting = text => text.substr(1, text.length - 2);

const Line = ({ className, text, showMe }) => {
  const style = showMe ? { opacity: 1 } : {};
  return (
    <h2 className={className} style={style}>
      {text}
    </h2>
  );
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
  opacity: 0;
  transition: all 0.1s ease-in;
`;
