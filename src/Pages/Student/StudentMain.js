import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Stack,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NewsList from "../../Components/Admin/NewsList";
import StudentProfilePage from "../Faculty/StudentProfilePage";
import Downloadables from "../../Components/Downloadables";

function StudentMain(props) {
  return (
    <>
      <Grid templateColumns={"repeat(3, 1fr)"} h={"100%"}>
        <GridItem colSpan={2}>
          <Box backgroundColor="white" h={"100%"}>
            <HStack
              w={"full"}
              // bg="gray.100"
              // ml={-1}
            >
              {/* CONTENT */}
              <Tabs variant="soft-rounded" colorScheme="blue" p={10}>
                <TabList>
                  <Tab>Profile</Tab>
                  {/* <Tab>Announcements</Tab> */}
                  <Tab>Links</Tab>
                  <Tab>Downloadables</Tab>
                </TabList>
                <TabPanels py={10}>
                  <TabPanel>
                    <StudentProfilePage />
                  </TabPanel>
                  {/* <TabPanel>
                    <p>Announcements</p>
                  </TabPanel> */}
                  <TabPanel>
                    <Text fontWeight={600} mb={2}>
                      Survey link:
                    </Text>
                    {/* <Box py={2} px={3} bg="gray.100" borderRadius={5}> */}
                    <a
                      href="https://drive.google.com/drive/my-drive"
                      target="_blank"
                    >
                      https://drive.google.com/drive/my-drive
                    </a>
                    {/* </Box> */}
                  </TabPanel>
                  <TabPanel>
                    <Downloadables />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </HStack>
          </Box>

          <Stack mt={20} pt={10}></Stack>
        </GridItem>

        <GridItem colSpan={1}>
          <NewsList />
        </GridItem>
      </Grid>
    </>
  );
}

export default StudentMain;
