import React, { useState } from "react";
import API from "../api";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { data } = await API.post("/auth/login", {
      email,
      password
    });

    localStorage.setItem("token", data.token);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
