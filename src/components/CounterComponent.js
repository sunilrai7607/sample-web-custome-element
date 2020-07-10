import React, { Component } from "react";
import ReactDOM from "react-dom";

import reactToWebComponent from "react-to-webcomponent";

class CounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleIncrement = () => {
    // this.setState({
    //   ...this.state.counter,
    //   counter: this.state.counter + 1,
    // });
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    return (
      <>
        <div>Counter : {this.state.counter}</div>
        <div>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
      </>
    );
  }
}

customElements.define(
  "my-counter",
  reactToWebComponent(CounterComponent, React, ReactDOM)
);
