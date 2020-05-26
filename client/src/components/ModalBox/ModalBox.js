import React from "react";
import "./style.css";
import BugName from "../BugName/BugName";
import SubmittedBy from "../SubmittedBy/SubmittedBy";
import BugDetails from "../BugDetails/BugDetails";

function ModalBox() {
  return (
    <div
      style={{
        width: "600px",
        height: "300px",
        backgroundColor: "grey",
        borderRadius: "15px",
      }}
    >
      <BugName />
      <SubmittedBy />
      <BugDetails />
    </div>
  );
}

export default ModalBox;
