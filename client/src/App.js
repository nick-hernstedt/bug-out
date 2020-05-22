/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Project from "./pages/Project";
import FourOhFour from "./pages/FourOhFour";

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
        <Route>
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
