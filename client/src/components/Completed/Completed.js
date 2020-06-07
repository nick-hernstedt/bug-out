import React from "react"
import "./style.css"

function Completed({children})  {
    return (
        <div>
      <div>
        <h4 className="header">Completed</h4>
      </div>
      <div id="third">{children}</div>
    </div>
    )
} 

export default Completed