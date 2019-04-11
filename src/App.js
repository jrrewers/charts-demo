import React, { Component } from 'react';
import './App.css';
import {Bar} from "./components/bar";
import {Pie} from "./components/pie";

class App extends Component {
  render() {
    return (
      <div>
        <Pie/>
        <Bar/>
      </div>
    );
  }
}

export default App;
