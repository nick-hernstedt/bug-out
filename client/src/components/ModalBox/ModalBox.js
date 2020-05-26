import React from "react";
import "./style.css";
import BugName from "../BugName/BugName";
import SubmittedBy from "../SubmittedBy/SubmittedBy";
import BugDetails from "../BugDetails/BugDetails";
import DateMade from "../DateMade/DateMade";
import DropDown from "../DropDown/DropDown";
import NeedHelp from "../NeedHelp/NeedHelp";
import EditBtn from "../EditBtn/EditBtn";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

function ModalBox() {
  return (
    <div
      className="row"
      style={{
        width: "600px",
        height: "300px",
        backgroundColor: "grey",
        borderRadius: "15px",
      }}
    >
      <div className="col-8">
        <BugName />
        <SubmittedBy />
        <BugDetails />
      </div>
      <div className="col-4">
        <DateMade />
        <DropDown />
        <NeedHelp />
        <SubmitBtn />
      </div>
    </div>
  );
}

export default ModalBox;
