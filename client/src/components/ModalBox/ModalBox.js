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
import CloseButton from "../CloseButton/CloseButton";

function ModalBox(props) {
  return (
    <div
      className="row"
      style={{
        width: "600px",
        height: "350px",
        backgroundColor: "#01135a",
        padding: "10px",
        boxShadow: "0px 0px 60px 30px #08C9C0",
      }}
    >
      <div className="col-7">{props.text}</div>
      <div className="col-5">
        <CloseButton />

        <DateMade />
        <NeedHelp />
        <DropDown />
      </div>
    </div>
  );
}

export default ModalBox;
