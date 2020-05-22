/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BugBox from "./components/BugBox/BugBox";
import Nav from "./components/Nav/Nav";
import InProgress from "./components/InProgress/InProgress";
import Completed from "./components/Completed/Completed";
import NeedHelp from "./components/NeedHelp/NeedHelp";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Project from "./pages/Project";
import FourOhFour from "./pages/FourOhFour";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/project/:id">
          <Project />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route>
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
