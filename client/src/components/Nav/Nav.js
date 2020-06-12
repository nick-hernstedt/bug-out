import React from "react";
import Logo from "../Logo/Logo";
import "./Nav.css";

function Nav() {
  return (
    <div className="row">
      <Logo className="col-12" />
      <h6
        className="col-4 joke"
        style={{
          marginLeft: "400px",
        }}
      >
        {localStorage.getItem("joke")}
      </h6>
    </div>
  );
}
export default Nav;
