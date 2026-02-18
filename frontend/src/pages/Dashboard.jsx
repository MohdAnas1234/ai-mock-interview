import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/books">Books</Link> | 
      <Link to="/users">Users</Link> | 
      <Link to="/issues">Issues</Link>
    </div>
  );
}

export default Dashboard;
