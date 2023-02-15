import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AnimatedRoutes;
