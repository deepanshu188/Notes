import React from "react";

type myProps = {
  data: string;
};

class Card extends React.Component<myProps> {
  render() {
    return (
      <div className="card">
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default Card;
