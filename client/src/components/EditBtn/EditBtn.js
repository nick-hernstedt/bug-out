import React from "react";
import "./EditBtn.css";

function EditBtn() {
  function editBug() {
    alert("Hello!");
  }

  return <i onClick={editBug} className="fa fa-edit editBtn"></i>;
}

export default EditBtn;
