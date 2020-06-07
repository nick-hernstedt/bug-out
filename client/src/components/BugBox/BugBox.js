import React from "react";
import "./style.css";

function BugBox({ children }) {
  return (
    <div>
      <h4 className="header">Bugs to Solve</h4>
      <div id="first">{children}</div>
    </div>
  );
}

export default BugBox;
