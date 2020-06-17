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
    <div className={props.modalState === "hide" ? "hide row" : "show row"}>
      <div className="col-lg-7 col-sm-10 ">{props.children}</div>
      <div className="col-lg-5 col-sm-10 ">
        <CloseButton close={props.close} />

        <DateMade />
      </div>
    </div>
  );
}

export default ModalBox;
