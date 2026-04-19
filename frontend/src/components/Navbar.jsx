import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-olive shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          AI Mock Interview
        </Link>

        <div className="ms-auto d-flex align-items-center">
          <button
            className="btn btn-light btn-sm me-3"
            onClick={toggleDark}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {token ? (
            <button
              className="btn btn-light btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link className="btn btn-light btn-sm" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;