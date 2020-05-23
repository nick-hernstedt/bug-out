import React, { useState, useEffect } from "react";
import EditBtn from "../EditBtn/EditBtn";
import { List, ListItem } from "./List"
import API from "../../utils/API";
import "./style.css"

function BugCards(props) {
  // Setting our component's initial state

  
  
  return (
    <div
      style={{
        height: "40px",
        width: "300px",
        backgroundColor: "grey",
        justifyContent: "center",
      }}
    >
      <List>
        {props.bugs.map(bug => (
          <ListItem key={bug._id}>
            {bug.title}
            
          </ListItem>
        ))}
      </List>
      <EditBtn />
    </div>
  );
}

export default BugCards;
