import React, { useState, useEffect } from "react";
import EditBtn from "../EditBtn/EditBtn";
import { List, ListItem } from "./List";
import API from "../../utils/API";
import "./BugCards.css";
import "./style.css";

function BugCards(props) {
  // Setting our component's initial state

  return (
    <div>
      <List>
        {props.bugs.map((bug) => (
          <ListItem key={bug._id} style={{ borderRadius: "15px;" }}>
            {bug.title}

            <EditBtn />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default BugCards;
