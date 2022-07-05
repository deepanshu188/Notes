import React from "react";

type myProps = {
  input?: string;
  addNotes: () => void;
  func: (input: string) => void;
};

type myState = {
  input: string;
};

class Popup extends React.Component<myProps, myState> {
  private inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: myProps) {
    super(props);

    this.inputRef = React.createRef();
  }
  state = {
    input: "",
  };

  componentDidMount() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  render() {
    return (
      <div className="backdrop">
        <div className="task-container">
          <h2 className="popup-name">Add Note</h2>
          <input
            ref={this.inputRef}
            className="add-task"
            placeholder="Type a Note"
            onChange={this.handleInput}
          />
          <div className="confirmation">
            <button
              className="add btn"
              onClick={() => {
                this.props.addNotes();
                this.props.func(this.state.input);
              }}
            >
              Add
            </button>
            <button className="cancel btn" onClick={this.props.addNotes}>
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  handleInput = (e: { target: { value: string } }) => {
    this.setState({ input: e.target.value });
  };
}

export default Popup;
