import React from 'react';

import Column from 'src/app/column';
import Heading from 'src/app/heading';
import Line from 'src/app/line';

const Slide = ({ title, content }) => (
  <Column>
    <Heading>{title}</Heading>
    {content.map((line, i) => <Line key={`line-${i}`}>{line}</Line>)}
  </Column>
);

export default Slide;
