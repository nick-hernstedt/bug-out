import React from "react";
import "./EditBtn.css";
import API from "../../utils/API";

function EditBtn(props) {
  var id = props.bugId;

  function getEditModalInfo() {
    API.getBug(id).then((res) => {
      console.log(res);
    });
  }

  return (
    <button
      className="editBtn"
      onClick={() => {
        props.toggleEditModal();
        getEditModalInfo();
      }}
    >
      <i className="fa fa-edit edit"></i>
    </button>
  );
}

export default EditBtn;
