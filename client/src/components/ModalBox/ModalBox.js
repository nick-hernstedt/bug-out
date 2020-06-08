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
  style = {};
  return (
    <div
      className="row"
      style={
        modalState === "hide"
          ? {
              visibility: "hidden",
              width: "600px",
              margin: "auto",
              height: "350px",
              backgroundColor: "#01135a",
              padding: "10px",
              boxShadow: "0px 0px 60px 30px #08C9C0",
              zIndex: "-1",
            }
          : {
              visibility: "visible",
              width: "600px",
              margin: "auto",
              height: "350px",
              backgroundColor: "#01135a",
              padding: "10px",
              boxShadow: "0px 0px 60px 30px #08C9C0",
              zIndex: "-1",
            }
      }
    >
      <div className="col-7">{props.children}</div>
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
