import React from "react";
import "./LogOutBtn.css";
import { PromiseProvider } from "mongoose";

function LogOutBtn() {
  return (
    <button type="button" className="logOutBtn">
      Log Out
    </button>
  );
}

export default LogOutBtn;
