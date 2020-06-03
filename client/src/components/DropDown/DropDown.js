import React from "react";
import "./DropDown.css";

function DropDown() {
  return (
    <div>
      <select name="options" className="select-css">
        <option value="submitted">Bug to Solve</option>
        <option value="in-progress">In Progress</option>
        <option value="complete">Completed</option>
      </select>
    </div>
  );
}

export default DropDown;
