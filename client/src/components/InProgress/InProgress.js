import React from "react"

function InProgress({ children }) {
    return (
        <div>
            <div>
                <h1>In progress</h1>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default InProgress