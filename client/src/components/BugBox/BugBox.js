import React from "react";
import "./style.css"

function BugBox({ children }) {
  return (
    <div>
      <div>
        <h1>Bugs to solve</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BugBox;
