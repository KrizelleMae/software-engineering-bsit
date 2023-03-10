import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import Announcements from "../../Components/Admin/Announcements";
import News from "../../Components/Admin/News";
import NewsList from "../../Components/Admin/NewsList";
import Sidebar from "../../Components/Admin/Sidebar";

function NewsAndAnnouncement(props) {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Box bg="white" boxShadow="lg" p={4}>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>News</Tab>
                <Tab>Announcements</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    <GridItem colSpan={3}>
                      <News />
                    </GridItem>
                    <GridItem colSpan={2} h="auto">
                      <NewsList />
                    </GridItem>
                  </Grid>
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
