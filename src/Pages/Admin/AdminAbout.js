import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Mission from "../../Components/Admin/Mission";
import Sidebar from "../../Components/Admin/Sidebar";
import Vision from "../../Components/Admin/Vision";

function AdminAbout(props) {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Heading fontSize="4xl" mb={6}>
            About{" "}
          </Heading>
          <Box bg="white" boxShadow="lg" p={4}>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Mission</Tab>
                <Tab>Vision</Tab>
                <Tab>Objectives</Tab>
                <Tab>Program Outcomes</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Mission />
                </TabPanel>
                <TabPanel>
                  <Vision />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AdminAbout;
