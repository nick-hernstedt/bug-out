import React from "react";
import Logo from "../Logo/Logo";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="row">
      <Link className="logoutBtn" to="/">
        Log Out
      </Link>

      <Logo className="" />
      <h6 className="col-lg-4 col-sm-10 joke">
        {localStorage.getItem("joke")}
      </h6>
    </div>
  );
}
export default Nav;
