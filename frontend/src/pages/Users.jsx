import React, { useState, useEffect } from "react";
import API from "../api";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchUsers = async () => {
    const { data } = await API.get("/users");
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () => {
    await API.post("/users", { name, email });
    fetchUsers();
  };

  return (
    <div>
      <h2>Users</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
