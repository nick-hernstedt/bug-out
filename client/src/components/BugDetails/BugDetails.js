import React from "react";

function BugDetails() {
  return (
    <form>
      <label for="bugDetails">Bug Details:</label>
      <br />
      <input
        type="text"
        name="bugDetails"
        style={{ height: "150px", borderRadius: "10px", width: "300px" }}
      />
    </form>
  );
}

export default BugDetails;
