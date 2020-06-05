import React from "react";
import "./EditBtn.css";

function EditBtn() {
  function editBug() {
    alert("Hello!");
  }

  return (
    <button className="editBtn" onClick={editBug}>
      <i className="fa fa-edit edit"></i>
    </button>
  );
}

export default EditBtn;
