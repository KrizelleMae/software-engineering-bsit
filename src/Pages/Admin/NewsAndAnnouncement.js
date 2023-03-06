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
import Announcements from "../../Components/Admin/Announcements";
import News from "../../Components/Admin/News";
import Sidebar from "../../Components/Admin/Sidebar";

function NewsAndAnnouncement(props) {
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
                <Tab>News</Tab>
                <Tab>Announcements</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <News />
                </TabPanel>
                <TabPanel>
                  <Announcements />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default NewsAndAnnouncement;
