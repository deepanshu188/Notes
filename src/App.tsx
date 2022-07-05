import React from "react";
import "./App.css";
import Card from "./Card";
import Popup from "./Popup";

type myState = {
  createTask: boolean;
  input: string;
  data: string[];
};

type myProps = {
  addNotes?: () => void;
  func?: (input: string) => void;
};

class Notes extends React.Component<myProps, myState> {
  state: myState = {
    createTask: false,
    input: "",
    data: [],
  };
  componentDidMount() {
    const arr = localStorage.getItem("data");
    if (arr)
      this.setState({
        data: JSON.parse(arr),
      });
  }

  render() {
    return (
      <div className="app">
        {this.state.createTask ? (
          <Popup func={this.handleInput} addNotes={this.addNotes} />
        ) : this.state.data.length ? (
          this.state.data.map((data, key) => {
            return <Card data={data} key={key} />;
          })
        ) : (
          <h1 className="title">Create Notes</h1>
        )}

        <button className="add-icon" onClick={this.addNotes}>
          +
        </button>
      </div>
    );
  }

  addNotes = (): void => {
    this.setState({
      createTask: !this.state.createTask,
    });
  };

  handleInput = (i: string): void => {
    this.setState({ input: i }, () => {
      this.setState({ data: [...this.state.data, this.state.input] }, () => {
        localStorage.setItem("data", JSON.stringify(this.state.data));
      });
    });
  };
}

export default Notes;
