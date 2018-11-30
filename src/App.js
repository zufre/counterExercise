import React, { Component } from "react";

import "./App.css";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter initialNumber={0} />
        <Counter initialNumber={1} />
        <Counter initialNumber={2} />
        <Counter initialNumber={3} />
      </div>
    );
  }
}

export default App;
