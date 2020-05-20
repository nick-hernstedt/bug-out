/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import BugBox from "./components/BugBox/BugBox";
import Nav from "./components/Nav/Nav";
import InProgress from "./components/InProgress/InProgress";
import Completed from "./components/Completed/Completed";
import NeedHelp from "./components/NeedHelp/NeedHelp";
import BugCards from "./components/BugCards/BugCards";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <BugBox>
          <BugCards></BugCards>
        </BugBox>
        <InProgress></InProgress>
        <NeedHelp></NeedHelp>
        <Completed></Completed>
      </div>
    );
  }
}

export default App;
