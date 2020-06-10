import React from "react";
import "./SubmitBtn.css";
import { PromiseProvider } from "mongoose";

function SubmitBtn(props) {
  return (
    <button onClick={props.close} type="button" className="submitBtn">
      Submit
    </button>
  );
}

export default SubmitBtn;
