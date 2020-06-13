import React from "react";
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
<<<<<<< HEAD
            <DeleteBtn delete={props.deleteBugs} />
            <EditBtn toggleEditModal={props.wasd} bugId={bug._id} />
=======
            <EditBtn toggleEditModal={props.wasd} getEditModalInfo={props.getEditModalInfo} bugId={bug._id}/>
>>>>>>> 8451b23021c6b6f95069057fe74671bb9955406a
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default BugCards;
