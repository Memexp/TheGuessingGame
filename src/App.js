import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    random: Math.floor(Math.random() * 100),
    message: "",
    attemps: 3,
    input: "",
    color: { color: "white" }
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  reset = () => {
    this.setState({
      random: Math.round(Math.random() * 100),
      message: "",
      attemps: 3,
      input: ""
    });
  };
  handleClick = () => {
    let input = this.state.input;
    let newAttemp = this.state.attemps - 1;
    let newtt = newAttemp + 1;

    if (this.state.attemps >= 0) {
      if (parseInt(input) === this.state.random) {
        this.setState({
          message:
            "Congratulations! " +
            this.state.random +
            " is the right number!!! ",
          color: { color: "yellow" }
        });
      } else if (parseInt(input) > this.state.random) {
        this.setState({
          attemps: newAttemp,
          message:
            "Go Lower, my dear! you're far away, you have " + newtt + " left",
          color: { color: "darkred" }
        });
      } else if (parseInt(input) < this.state.random) {
        this.setState({
          attemps: newAttemp,
          message:
            "Go Higher, my dear! you're far away, you have " + newtt + " left",
          color: { color: "darkred" }
        });
      } else {
        this.setState({
          attemps: newAttemp,
          message:
            "Hey!!! You didn't know its a number guessing game? Try sumbit a number my dear, you have " +
            newtt +
            " left",
          color: { color: "blue" }
        });
      }
    } else {
      this.setState({ message: "You LOSE, you finished your 4 attemps." });
    }
  };

  hint = () => {
    let close = this.state.random + 10;
    let around = this.state.random - 5;
    alert("The number is between " + close + " and " + around);
  };

  render() {
    console.log(this.state.random);
    return (
      <div
        className="App"
        style={{
          fontWeight: "bold"
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <p
          style={{
            color: "white"
          }}
        >
          Guess a number between 1-100
        </p>
        <div className="container text-center">
          <input
            className="form-control"
            type="Integer"
            name="inputGuess"
            id="input"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Guess!"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <br />
        <h4 style={this.state.color}> {this.state.message} </h4>
        <br />
        <button className="btn btn-secondary" onClick={this.handleClick}>
          Guess
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.reset} className="btn btn-secondary">
          Clear
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.hint} className="btn btn-secondary">
          Hint
        </button>
      </div>
    );
  }
}

export default App;
