import React from "react";
import "./style.css"

function BugBox({ children }) {
  return (
    <div>
      <div>
        <h4 className="header">Bugs to Solve</h4>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default BugBox;
