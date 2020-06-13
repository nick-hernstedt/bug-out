import React from "react";
import "./EditBtn.css";

function EditBtn(props) {
  var id = props.bugId;

  return (
    <button
      className="editBtn"
      onClick={() => {
        props.toggleEditModal();
        props.getEditModalInfo(id);
      }}
    >
      <i className="fa fa-edit edit"></i>
    </button>
  );
}

export default EditBtn;
