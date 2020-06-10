import React from "react";
import "./CloseButton.css";
import { PromiseProvider } from "mongoose";

function CloseButton(props) {


  return <i onClick={props.close} className="fa fa-window-close closeBtn"></i>;
}

export default CloseButton;
