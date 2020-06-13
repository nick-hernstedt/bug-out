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
import DeleteBtn from "../DeleteBtn/DeleteBtn";

function ModalBox(props) {
  return (
    <div
      className={props.modalState === "hide" ? "hide row" : "show row"}
      style={{ transform: "translateY(-150px)" }}
    >
      <div className="col-7">{props.children}</div>
      <div className="col-5">
        <CloseButton close={props.close} />

        <DateMade />
        <NeedHelp />
        <DropDown />
      </div>
    </div>
  );
}

export default ModalBox;
