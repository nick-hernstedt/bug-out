import React from "react";
import EditBtn from "../EditBtn/EditBtn";

function BugCards(props) {
  return (
    <div
      style={{
        height: "40px",
        width: "300px",
        backgroundColor: "grey",
        justifyContent: "center",
      }}
    >
      <p>some bugs will go here{props.title}</p>
      <EditBtn />
    </div>
  );
}

export default BugCards;
