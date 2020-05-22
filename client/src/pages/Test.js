import React from "react"
import BugBox from "../components/BugBox/BugBox";
import Nav from "../components/Nav/Nav";
import InProgress from "../components/InProgress/InProgress";
import Completed from "../components/Completed/Completed";
import NeedHelp from "../components/NeedHelp/NeedHelp";

function Test() {
    return (
        <div className="container">
            <Nav/>
            <BugBox></BugBox>
            <InProgress></InProgress>
            <Completed></Completed>
            <NeedHelp></NeedHelp>
        </div>
    )
}

export default Test