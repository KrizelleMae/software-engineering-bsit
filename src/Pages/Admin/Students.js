import React from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import StudentActivities from "../../Components/Admin/StudentActivities";

function Students(props) {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Box bg="white" boxShadow="lg" p={4}>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Activities</Tab>
                <Tab>Support</Tab>
                <Tab>Scholarships</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {/* <Button onClick={preview.onOpen} size="sm">
                    Preview
                  </Button> */}
                  <StudentActivities />
                </TabPanel>
                <TabPanel>{/* */}</TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Students;
