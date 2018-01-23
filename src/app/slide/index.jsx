import React from 'react';

import Column from 'src/app/column';
import Heading from 'src/app/heading';
import Line from 'src/app/line';

const showMe = (lineNum, currentLine) => lineNum <= currentLine;

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentLine: -1 };
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      const nextLine = this.state.currentLine + 1;
      nextLine < this.props.content.length &&
        this.setState({ currentLine: nextLine });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      this.setState({ currentLine: -1 });
    }
  }

  render() {
    const { title, content } = this.props;
    return (
      <Column>
        <Heading>{title}</Heading>
        {content.map((line, lineNum) => (
          <Line
            key={`line-${lineNum}`}
            showMe={showMe(lineNum, this.state.currentLine)}
          >
            {line}
          </Line>
        ))}
      </Column>
    );
  }
}

export default Slide;
