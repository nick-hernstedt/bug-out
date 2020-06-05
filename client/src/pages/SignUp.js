import React, { useState, useEffect } from "react";
import API from "../utils/API";
import axios from "axios";
import "./app.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value });
  }

  let token = ""

  function onSubmit(event) {
    event.preventDefault();

    console.log(signUp.email)

    axios.post("/api/users", {
      headers: { 
        "Authorization": token, 
        "Content-Type": "application/json"},
      user: {
      email: signUp.email,
      password: signUp.password
    }
    }).then(function (response) {
      console.log(response.data)
      localStorage.setItem("data", JSON.stringify(response.data))
      
      localStorage.setItem("id", JSON.stringify(response.data.user._id))
      localStorage.setItem("project", JSON.stringify(response.data.user.email))
      localStorage.setItem("token", JSON.stringify(response.data.user.token))
      window.location.replace("/test")
    }).catch(function (err) {
      alert('project name already exists')
    })

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
        <Link 
          className="pageButton"
          to="/login"
        >
          Log In
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
