import React, { useState, useEffect } from "react";
import EditBtn from "../EditBtn/EditBtn";
import { List, ListItem } from "./List";
import "./BugCards.css";
import "./style.css";
import DeleteBtn from "../DeleteBtn/DeleteBtn";

function BugCards(props) {
  return (
    <>
      <List id={props.id}>
        {props.bugs.map((bug) => (
          <ListItem key={bug._id} id={bug._id}>
            {bug.title}
            <DeleteBtn delete={props.deleteBugs} />
            <EditBtn />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default BugCards;
