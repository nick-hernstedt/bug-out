import React from "react";
import "./style.css";


// This file exports both the List and ListItem components

export function List({ children, id }) {
  return (
    <div className="list-overflow-container box">
      <ul className="list-group" id={id}>{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item movable">{children}</li>;
}
