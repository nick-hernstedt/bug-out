import React from "react"

function Completed({children})  {
    return (
        <div>
      <div>
        <h1>Completed</h1>
      </div>
      <div>{children}</div>
    </div>
    )
} 

export default Completed