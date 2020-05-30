import React from "react";
import "./style.css"

function BugBox({ children }) {
  return (
    <div>
      <div>
        <h4 className="header">Bugs to solve</h4>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BugBox;
