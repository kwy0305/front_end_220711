import React from "react";

class Title extends React.Component {
  static defaultProps = {
    text: "react",
  };
  render() {
    const { text } = this.props;

    return <div>{text}</div>;
  }
}

export default Title;
