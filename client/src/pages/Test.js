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
import BugCards from "../components/BugCards/BugCards";
import { Input, TextArea, FormBtn } from "../components/Form/Form";

function Test() {
  const [bugs, setBugs] = useState([]);
  const [formObject, setFormObject] = useState({});

 
  useEffect(() => {
    loadBugs();
  }, []);

  function loadBugs() {
    API.getBugs()
      .then((res) => setBugs(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("clicked")

    console.log(formObject.author, formObject.title, formObject.description)
    if (formObject.author && formObject.title && formObject.description) { 
      API.saveBug({
        title: formObject.title,
        author: formObject.author,
        description: formObject.description
      })
        .then(res => loadBugs())
        .catch(err => console.log(err));
    }
  };

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

      <ModalBox text={
        <form>
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Title (required)"
          />
          <Input
            onChange={handleInputChange}
            name="author"
            placeholder="Author (required)"
          />
          <TextArea
            onChange={handleInputChange}
            name="description"
            placeholder="Description (required)"
          />
          <FormBtn
            disabled={!(formObject.author && formObject.title && formObject.description)}
            onClick={handleFormSubmit}
          >
            Submit Bug
              </FormBtn>
        </form>
      }>


      </ModalBox>
    </div>
  );
}

export default Test;
