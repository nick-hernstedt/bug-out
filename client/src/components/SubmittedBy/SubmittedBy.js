import React from "react";

function SubmittedBy() {
  return (
    <form
      style={{
        color: "#ff01ff",
        fontFamily: '"Tinos", serif',
        fontSize: "20px",
        paddingTop: "5px",
      }}
    >
      <label for="submittedBy">Submitted By:</label>
      <br />
      <input
        type="text"
        name="submittedBy"
        style={{
          height: "25px",
          borderRadius: "10px",
          width: "200px",
          backgroundColor: "#08c9c0",
        }}
      />
    </form>
  );
}

export default SubmittedBy;
