import React from "react";
import DashboardTile from "../../Components/Admin/DashboardTile";

import Sidebar from "../../Components/Admin/Sidebar";

function Dashboard(props) {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <DashboardTile />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
