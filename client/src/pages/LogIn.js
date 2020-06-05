import React, { useState, useEffect } from "react";
import API from "../utils/API";
import axios from "axios";
import "./app.css";

function LogIn() {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    console.log(signUp.email);

    axios
      .post("/api/users/login", {
        user: {
          email: signUp.email,
          password: signUp.password,
        },
      })
      .then(function (response) {
        window.location.replace("/test");
      })
      .catch(function (err) {
        alert("incorrect password or project name");
      });
  }

  return (
    <div className="container">
      <div>
        <h1 className="title">B U G - O U T</h1>
      </div>
      <form className="signup">
        <div className="form-group">
          <label for="exampleInputEmail1">Project name:</label>
          <input
            className="form-control"
            id="email-input"
            placeholder="Project Name"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div id="alert" className="alert alert-danger d-none" role="alert">
          <span
            className="glyphicon glyphicon-exclamation-sign"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Error:</span> <span className="msg"></span>
        </div>
        <button
          type="submit"
          onClick={(event) => onSubmit(event)}
          className="signupBtn"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default LogIn;
