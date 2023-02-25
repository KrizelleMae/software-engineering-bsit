import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Admin/Dashboard";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default AnimatedRoutes;
