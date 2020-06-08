import React from "react";
import "./UpdateModalBtn.css";

function UpdateModalBtn(props) {
  return (
    <div>
      <button type="button" onClick={props.wasd}>
        New Bug
      </button>
    </div>
  );
}

export default UpdateModalBtn;
