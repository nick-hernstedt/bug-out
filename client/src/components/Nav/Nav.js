import React from "react";
import Logo from "../Logo/Logo";


function Nav() {
  return (
    <div className="row">
      <Logo className="col-4" />
      <h5 className="col-4"
      style={{
        
      }}>{localStorage.getItem("joke")}</h5>
    </div>
  );
}
export default Nav;
