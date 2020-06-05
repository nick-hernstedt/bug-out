import React from "react"
import "./style.css"

function InProgress({ children }) {
    return (
        <div>
            <div>
                <h4 className="header">In Progress</h4>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default InProgress