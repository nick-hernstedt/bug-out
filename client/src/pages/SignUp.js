import React, { useState, useEffect } from "react";
import API from "../utils/API"
import axios from "axios"

function SignUp() {
  const [signUp, setSignUp] = useState({
    project: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault()

  }

  function verify(event) {
    event.preventDefault()

    console.log(signUp)
    if (signUp.project && signUp.password) {
      axios.post("http://localhost:3001/api/signup", {
        project: signUp.project,
        password: signUp.password
      }).then(function (response) {
        console.log(response.data)
      })
        .catch(function (err) {
          console.log(err)
        })
    }
  }

  return (
    <div>
      <div className="title">
        <h1>Please create an account</h1>
      </div>
      <form class="signup">
        <div class="form-group">
          <label for="projectName">Project Name</label>
          <input class="form-control" id="user-input" placeholder="Project Name" onChange={handleChange} name="project" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="password-input" placeholder="Password" name="password" onChange={handleChange} />
        </div>
        <div id="alert" class="alert alert-danger" role="alert">
          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span class="sr-only">Error:</span> <span class="msg"></span>
        </div>
        <button type="submit" class="btn btn-default" onClick={(event) => { verify(event) }}>Sign Up</button>
      </form>
      <p>Or log in <a href="/login">here</a></p>
    </div>
  );
}

export default SignUp;
