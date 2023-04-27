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
import React, { useState, useEffect } from "react";
import NewsList from "../../Components/Admin/NewsList";
import StudentProfilePage from "../Faculty/StudentProfilePage";
import Downloadables from "../../Components/Downloadables";
import api from "../../Api/api";
import Feed from "../../Components/Faculty/Feed";

function StudentMain(props) {
  const [data, setData] = useState([]);
  const getList = async () => {
    let response = await api.get(`/memoAccess/2`);

    setData(response.data);
  };

  useEffect(() => {
    getList();
  }, [data]);

  return (
    <>
      <Grid templateColumns={"repeat(5, 1fr)"} h={"100%"}>
        <GridItem colSpan={3}>
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
                  <Tab>Memorandums</Tab>
                  <Tab>Links</Tab>
                  <Tab>Downloadables</Tab>
                </TabList>
                <TabPanels py={7}>
                  <TabPanel>
                    <StudentProfilePage />
                  </TabPanel>
                  <TabPanel width="100vh">
                    <Stack>
                      {data.map((e, key) => {
                        return (
                          <Feed
                            title={e.title}
                            description={e.description}
                            file={e.file}
                            file_name={e.file_name}
                            created_at={e.created_at}
                            updated_at={e.cupdated_at}
                          />
                        );
                      })}
                    </Stack>
                  </TabPanel>
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

        <GridItem colSpan={2}>
          <NewsList />
        </GridItem>
      </Grid>
    </>
  );
}

export default StudentMain;
