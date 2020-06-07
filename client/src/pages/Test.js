import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import BugBox from "../components/BugBox/BugBox";
import Nav from "../components/Nav/Nav";
import InProgress from "../components/InProgress/InProgress";
import Completed from "../components/Completed/Completed";
// import NeedHelp from "../components/NeedHelp/NeedHelp";
import BugCard from "../components/BugCards/BugCards";
import ModalBox from "../components/ModalBox/ModalBox";
// import BugName from "../components/BugName/BugName";
import API from "../utils/API";
// import Image from "../assets/images/1iwcit1gidyy.jpg";
// import BugCards from "../components/BugCards/BugCards";
import UpdateModalBtn from "../components/UpdateModalBtn/UpdateModalBtn";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import "./dragula.css";
import "./app.css";
// import axios from "axios"
import dragula from "react-dragula";

function Test() {
  const [bugs, setBugs] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadBugs();
    var first = "#first";
    var second = "#second";
    var third = "#third";

    var containers = [
      document.querySelector(first),
      document.querySelector(second),
      document.querySelector(third),
    ];
    dragula({ containers: containers });
  }, []);

  function loadBugs() {
    API.getBugs()
      .then((res) => {
        setBugs(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (formObject.author && formObject.title && formObject.description) {
      API.saveBug({
        title: formObject.title,
        author: formObject.author,
        description: formObject.description,
        projectID: data.user._id,
      })
        .then((res) => loadBugs())
        .catch((err) => console.log(err));
    }
  }

  const data = JSON.parse(localStorage.getItem("data"));
  let notAssigned = [];
  let inProgress = [];
  let completed = [];
  let projectID = [];

  function main() {
    for (let i = 1; i <= bugs.length; i++) {
      if (bugs[i] != null) {
        if (bugs[i].projectID === data.user._id) {
          if (bugs[i].completed === true) {
            completed.push(bugs[i]);
            continue;
          } else if (bugs[i].inProgress === true) {
            inProgress.push(bugs[i]);
            continue;
          } else if (bugs[i].inProgress === false) {
            notAssigned.push(bugs[i]);
            continue;
          } else if (bugs[i].projectID !== projectID) {
            continue;
          }
          continue;
        }
      }
      continue;
    }
  }

  main();

  return (
    <div
      className="row justify-content-md-center"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="col-8 ">
        <Nav></Nav>

        <UpdateModalBtn />

        <div className="row">
          <div className="col-4">
            <BugBox>
              <BugCard bugs={notAssigned} />
            </BugBox>
          </div>
          <div className="col-4">
            <InProgress>
              <BugCard bugs={inProgress} />
            </InProgress>
          </div>
          <div className="col-4">
            <Completed>
              <BugCard bugs={completed} />
            </Completed>
          </div>
        </div>

        <ModalBox className="row" id="newBug">
          <form>
            <p className="form-text">Bug Name:</p>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Bug Name (required)"
              style={{
                height: "25px",
                width: "200px",
              }}
            />
            <p className="form-text">Submitted By:</p>
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Submitted By (required)"
              style={{
                height: "25px",
                width: "200px",
              }}
            />
            <p className="form-text">Bug Description:</p>
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description (required)"
              style={{
                height: "150px",
                width: "300px",
              }}
            />
            <FormBtn style={{ cursor: "pointer" }} onClick={handleFormSubmit}>
              Submit Bug
            </FormBtn>
          </form>
        </ModalBox>
        <h1>{localStorage.getItem("joke")}</h1>
      </div>
      {/* <ul id="first">
        <li>fck</li>
      </ul>
      <ul id="second">
        <li>fck</li>
      </ul>
      <ul id="third">
        <li>fck</li>
      </ul> */}
    </div>
  );
}

export default Test;
