import React from "react";

function SubmittedBy() {
  return (
    <div>
      <form>
        <label for="fname">Submitted By:</label>
        <br />
        <input type="text" name="submittedBy" />
      </form>
    </div>
  );
}

export default SubmittedBy;
