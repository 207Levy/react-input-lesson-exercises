import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }

  alertInputs = () => {
    alert(
      this.state.name !== "" || this.state.age !== ""
        ? `Hello ${this.state.name}, you are ${this.state.age}`
        : "No inputs to show"
    );
  };

  updateInputs = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <input
          id="name-input"
          name="name"
          value={this.state.name}
          onChange={this.updateInputs}
        />
        <input
          id="age-input"
          name="age"
          value={this.state.age}
          onChange={this.updateInputs}
        />
        <button onClick={this.alertInputs}>Go to Bar</button>
      </div>
    );
  }
}

export default Exercise1;
