import React from "react";

function Dropdown() {
  return (
    <div>
      <select name="options">
        <option value="submitted">Submitted</option>
        <option value="in-progress">In Progress</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  );
}

export default DropDown;
