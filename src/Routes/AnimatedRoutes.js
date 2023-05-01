import { Route, Routes, useNavigate } from "react-router-dom";
import Activities from "../Pages/Activities";
import AdminAbout from "../Pages/Admin/AdminAbout";
import Dashboard from "../Pages/Admin/Dashboard";
import Faculty from "../Pages/Admin/Faculty";
import NewsAndAnnouncement from "../Pages/Admin/NewsAndAnnouncement";
import Programs from "../Pages/Admin/Programs";
import FacultyMain from "../Pages/Faculty/FacultyMain";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import StudentMain from "../Pages/Student/StudentMain";
import AlumniMain from "../Pages/Alumni/AlumniMain";
import Downloads from "../Pages/Admin/Downloads";
import UploadFile from "../Pages/Admin/UploadFile";
import { useEffect, useState } from "react";
import Students from "../Pages/Admin/Students";
import PDFViewer from "../Components/FileViewer";
import Memo from "../Pages/Admin/Memo";
import SurveyLink from "../Pages/Admin/SurveyLink";
import EditActivity from "../Pages/Admin/EditActivity";
import StudentTable from "../Components/Faculty/StudentTable";
import StudentContents from "../Pages/StudentContents";

function AnimatedRoutes() {
  // let navigate = useNavigate();
  // // const [user, setUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(
  //   sessionStorage.getItem("loggedIn") ?? false
  // );

  // useEffect(() => {
  //   // setLoggedIn();
  //   // console.log(loggedIn);
  //   if (loggedIn) {
  //     const data = JSON.parse(sessionStorage.getItem("user"));

  //     // console.log(data);
  //     if (data.role == 0) {
  //       navigate("/admin");
  //     } else if (data.role == 1) {
  //       navigate("/faculty");
  //     } else if (data.role == 2) {
  //       navigate("/student");
  //     } else if (data.role == 3) {
  //       navigate("/alumni");
  //     }
  //   } else {
  //     console.log("Logged out");
  //   }
  // }, [loggedIn]);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/activities" element={<StudentContents />} />
      <Route path="/student-act" element={<Activities />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/view/:file" element={<PDFViewer />} />

      {/* ADMIN */}
      <Route index path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/about/" element={<AdminAbout />} />
      <Route
        path="/admin/news-announcement"
        element={<NewsAndAnnouncement />}
      />
      <Route path="/admin/programs" element={<Programs />} />
      <Route path="/admin/faculty" element={<Faculty />} />
      <Route path="/admin/downloadables" element={<Downloads />} />
      <Route path="/upload" element={<UploadFile />} />
      <Route path="/admin/students" element={<Students />} />
      <Route path="/admin/memo" element={<Memo />} />
      <Route path="/admin/view-activity/:id" element={<EditActivity />} />
      <Route path="/admin/surveylink" element={<SurveyLink />} />

      {/* FACULTY */}
      {/* <Route path="/faculty" element={<FacultyMain />} /> */}
      <Route path="/faculty" element={<StudentTable />} />

      {/* STUDENTS */}
      <Route path="/student" element={<StudentMain />} />

      {/* ALUMNI */}
      <Route path="/alumni" element={<AlumniMain />} />
    </Routes>
  );
}

export default AnimatedRoutes;
