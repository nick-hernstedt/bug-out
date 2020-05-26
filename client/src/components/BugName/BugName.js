import React from "react";

function BugName() {
  return (
    <form>
      <label for="bugName">Bug Name:</label>
      <br />
      <input
        type="text"
        name="bugName"
        style={{ height: "25px", borderRadius: "10px", width: "200px" }}
      />
    </form>
  );
}

export default BugName;
