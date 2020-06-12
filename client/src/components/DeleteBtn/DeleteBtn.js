import React from "react";
import "./DeleteBtn.css";
import { PromiseProvider } from "mongoose";

function DeleteBtn(props) {
  return (
    <button onClick={props.close} type="button" className="DeleteBtn">
      Update Bug
    </button>
  );
}

export default DeleteBtn;
