import { Box } from "@chakra-ui/react";
import React from "react";
import DashboardTile from "../../Components/Admin/DashboardTile";
import Sidebar from "../../Components/Admin/Sidebar";

function Dashboard(props) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>

      <DashboardTile />
    </div>
  );
}

export default Dashboard;
