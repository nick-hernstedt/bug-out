import React from "react";
import "./style.css"

function BugBox({ children }) {
  return (
    <div>
      <div>
        <p>Todo</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BugBox;
