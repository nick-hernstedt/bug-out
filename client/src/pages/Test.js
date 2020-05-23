import React, { useState, useEffect } from "react";
import BugBox from "../components/BugBox/BugBox";
import Nav from "../components/Nav/Nav";
import InProgress from "../components/InProgress/InProgress";
import Completed from "../components/Completed/Completed";
import NeedHelp from "../components/NeedHelp/NeedHelp";
import BugCard from "../components/BugCards/BugCards"
import API from "../utils/API"


function Test() {
    const [bugs, setBugs] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBugs()
    }, [])

    // Loads all books and sets them to books
    function loadBugs() {
        API.getBugs()
            .then(res =>
                setBugs(res.data)
            )
            .catch(err => console.log(err));
    };

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

    function main() {
        let listItems = []
        for (let i = 0; i <= bugs.length; i++){
            if (bugs.inProgress === false){
                console.log(bugs[0])
            } else {
                console.log(Object.values(bugs[0]))                
                continue
            } 
        }
    }

    main()

    return (
        <div className="container">
            <Nav />
            <BugBox>
                <BugCard bugs={bugs} />
            </BugBox>
            <InProgress></InProgress>
            <Completed></Completed>
            <NeedHelp></NeedHelp>

        </div>
    )
}

export default Test