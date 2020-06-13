import React from "react";
import Logo from "../Logo/Logo";
import "./Nav.css";
import { Link } from "react-router-dom";


function Nav() {
  return (
  
    <div className="row">

        <Link onClick={()=>{localStorage.removeItem('data')}} className="logoutBtn" to="/">
         Log Out
        </Link>

      <Logo className="col-6" />
      <h6
        className="col-4 joke"
        style={{
          marginLeft: "300px",
        }}
      >
        {localStorage.getItem("joke")}
      </h6>
    </div>
   
  );
}
export default Nav;
