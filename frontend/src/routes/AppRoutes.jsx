import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Interview from "../pages/Interview";
import Result from "../pages/Result";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <Interview />
          </ProtectedRoute>
        }
      />

      <Route
        path="/result"
        element={
          <ProtectedRoute>
            <Result />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;