import React from "react";

function EditBtn() {
  function editBug() {
    alert("Hello!");
  }

  return (
    <i
      onClick={editBug}
      className="fa fa-edit"
      style={{ marginLeft: "280px", transform: "translateY(-25px)" }}
    ></i>
  );
}

export default EditBtn;
