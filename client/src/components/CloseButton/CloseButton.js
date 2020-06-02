import React from "react";
import "./CloseButton.css";

function CloseButton() {
  function closeModal() {
    alert("Hello!");
  }

  return <i onClick={closeModal} className="fa fa-window-close closeBtn"></i>;
}

export default CloseButton;
