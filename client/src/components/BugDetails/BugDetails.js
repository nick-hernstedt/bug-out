import React from "react";

function BugDetails() {
  return (
    <form
      style={{
        color: "#ff01ff",
        fontFamily: '"Tinos", serif',
        fontSize: "20px",
        paddingTop: "5px",
      }}
    >
      <label for="bugDetails">Bug Details:</label>
      <br />
      <input
        type="text"
        name="bugDetails"
        style={{
          height: "150px",
          borderRadius: "10px",
          width: "300px",
          backgroundColor: "#08c9c0",
        }}
      />
    </form>
  );
}

export default BugDetails;
