import { Route, Routes } from "react-router-dom";
import AdminAbout from "../Pages/Admin/AdminAbout";
import Dashboard from "../Pages/Admin/Dashboard";
import NewsAndAnnouncement from "../Pages/Admin/NewsAndAnnouncement";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route index path="/admin/" element={<Dashboard />} />
      <Route path="/admin/about/" element={<AdminAbout />} />
      <Route
        path="/admin/news-announcement"
        element={<NewsAndAnnouncement />}
      />
    </Routes>
  );
}

export default AnimatedRoutes;
