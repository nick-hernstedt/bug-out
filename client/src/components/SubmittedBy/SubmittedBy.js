import React from "react";

function SubmittedBy() {
  return (
    <form>
      <label for="submittedBy">Submitted By:</label>
      <br />
      <input
        type="text"
        name="submittedBy"
        style={{ height: "25px", borderRadius: "10px", width: "200px" }}
      />
    </form>
  );
}

export default SubmittedBy;
