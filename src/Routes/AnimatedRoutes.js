import { Route, Routes } from "react-router-dom";
import Activities from "../Pages/Activities";
import AdminAbout from "../Pages/Admin/AdminAbout";
import Dashboard from "../Pages/Admin/Dashboard";
import Faculty from "../Pages/Admin/Faculty";
import NewsAndAnnouncement from "../Pages/Admin/NewsAndAnnouncement";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/student-act" element={<Activities />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route index path="/admin/" element={<Dashboard />} />
      <Route path="/admin/about/" element={<AdminAbout />} />
      <Route
        path="/admin/news-announcement"
        element={<NewsAndAnnouncement />}
      />

      <Route path="/admin/faculty" element={<Faculty />} />
    </Routes>
  );
}

export default AnimatedRoutes;
