import React from "react";
import "./DropDown.css";

function DropDown() {
  return (
    <div>
      <select name="options" className="select-css">
        <option value="submitted">Submitted</option>
        <option value="in-progress">In Progress</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  );
}

export default DropDown;
