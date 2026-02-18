import React, { useState } from "react";
import API from "../api";

function Issues() {
  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");

  const issueBook = async () => {
    await API.post("/issues/issue", { bookId, userId });
    alert("Book Issued");
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <input placeholder="Book ID" onChange={(e) => setBookId(e.target.value)} />
      <input placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
      <button onClick={issueBook}>Issue</button>
    </div>
  );
}

export default Issues;
