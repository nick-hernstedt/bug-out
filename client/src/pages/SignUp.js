import React, { useState, useEffect } from "react";
import API from "../utils/API"
import auth from "../utils/auth"

function SignUp() {
  const [signUp, setSignUp] = useState({
    user: "",
    pass: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value });
  }

  function onSubmit(event){
    event.preventDefault()

  }

  return (
    <div>
      <div className="title">
        <h1>Her de der</h1>
      </div>
      <form>
        <input type="text" name="user" onChange={handleChange}></input>
        <input type="text" name="pass" onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default SignUp;
