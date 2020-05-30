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


function ModalBox(props) {
  
  return (
    <div
      className="row"
      style={{
        width: "600px",
        height: "330px",
        backgroundColor: "#01135a",
        borderRadius: "15px",
        padding: "10px",
        boxShadow: "0px 0px 60px 30px #ff01ff",
      }}
    >
      <div className="col-8">
        {props.text}
        </div>
    </div>
  );
}

export default ModalBox;
