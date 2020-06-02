import React, { useState, useEffect } from "react";
import BugBox from "../components/BugBox/BugBox";
import Nav from "../components/Nav/Nav";
import InProgress from "../components/InProgress/InProgress";
import Completed from "../components/Completed/Completed";
import NeedHelp from "../components/NeedHelp/NeedHelp";
import BugCard from "../components/BugCards/BugCards";
import ModalBox from "../components/ModalBox/ModalBox";
import BugName from "../components/BugName/BugName";
import API from "../utils/API";
import Image from "../assets/images/1iwcit1gidyy.jpg";
import BugCards from "../components/BugCards/BugCards";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import "./app.css";

function Test() {
  const [bugs, setBugs] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadBugs();
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
      })
        .then((res) => loadBugs())
        .catch((err) => console.log(err));
    }
  }

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
    <div
      className="row justify-content-md-center"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="col-8 ">
        <Nav></Nav>
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

        <ModalBox
          className="row"
          text={
            <form>
              <p className="form-text">Bug Name:</p>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Bug Name (required)"
                style={{
                  height: "25px",
                  borderRadius: "5px",
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
                  borderRadius: "5px",
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
                  borderRadius: "5px",
                  width: "300px",
                }}
              />
              <FormBtn
                disabled={
                  !(
                    formObject.author &&
                    formObject.title &&
                    formObject.description
                  )
                }
                onClick={handleFormSubmit}
              >
                Submit Bug
              </FormBtn>
            </form>
          }
        ></ModalBox>
      </div>
    </div>
  );
}

export default Test;
