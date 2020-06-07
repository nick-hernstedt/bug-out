import React, { useState, useEffect } from "react";
import EditBtn from "../EditBtn/EditBtn";
import { List, ListItem } from "./List";
import API from "../../utils/API";
import "./BugCards.css";
import "./style.css";

function BugCards(props) {


  return (
    <>
      <List>
        {props.bugs.map((bug) => (
          <ListItem key={bug._id}>
            {bug.title}

            <EditBtn />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default BugCards;
