import { Route, Routes } from "react-router-dom";
import AdminAbout from "../Pages/Admin/AdminAbout";
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
      <Route path="/admin">
        <Route index path="/admin/dashboard" element={<Dashboard />} />
        <Route path="about/mission-vision" element={<AdminAbout />} />
        <Route path="about/objectives" element={<AdminAbout />} />
        <Route path="about/outcomes" element={<AdminAbout />} />
      </Route>
    </Routes>
  );
}

export default AnimatedRoutes;
