import React, { useState, useEffect } from "react";
import BugBox from "../components/BugBox/BugBox";
import Nav from "../components/Nav/Nav";
import InProgress from "../components/InProgress/InProgress";
import Completed from "../components/Completed/Completed";
import NeedHelp from "../components/NeedHelp/NeedHelp";
import BugCard from "../components/BugCards/BugCards";
import ModalBox from "../components/ModalBox/ModalBox";
import API from "../utils/API";

function Test() {
  const [bugs, setBugs] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBugs();
  }, []);

  // Loads all books and sets them to books
  function loadBugs() {
    API.getBugs()
      .then((res) => setBugs(res.data))
      .catch((err) => console.log(err));
  }

  // function swap(props) {
  //     for (let i = 0; i < bugs.length; i++) {
  //         switch (props[i]) {
  //             case props[i] === false:
  //                  return bugs[i];
  //             case props[i] === true:
  //                 return console.log("suckit")
  //         }

  //     }

  // }

  let notAssigned = [];
  let inProgress = [];
  let completed = [];

  function main() {
    for (let i = 1; i <= bugs.length; i++) {
      if (bugs[i] != null) {
        if (bugs[i].completed === true) {
          completed.push(bugs[i]);
          continue;
        } else if (bugs[i].inProgress === true) {
          inProgress.push(bugs[i]);
          continue;
        } else if (bugs[i].inProgress === false) {
          notAssigned.push(bugs[i]);
          continue;
        }
        continue;
      }
    }
  }

  main();

  return (
    <div className="container">
      <BugBox>
        <BugCard bugs={notAssigned} />
      </BugBox>
      <InProgress>
        <BugCard bugs={inProgress} />
      </InProgress>
      <Completed>
        <BugCard bugs={completed} />
      </Completed>
      <NeedHelp></NeedHelp>

      <ModalBox></ModalBox>
    </div>
  );
}

export default Test;
