import React from "react";
import "./BugInfo.css";

function BugInfo({ children }) {
  return (
    <>
      <p className="bugInfo">{children}</p>
    </>
  );
}

export default BugInfo;
