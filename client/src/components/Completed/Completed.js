import React from "react";
import "./style.css";

function Completed({ children }) {
  return (
    <div>
      <h4 className="header">Completed</h4>
      <div>{children}</div>
    </div>
  );
}

export default Completed;
