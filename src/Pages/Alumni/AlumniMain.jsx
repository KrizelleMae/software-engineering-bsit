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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NewsList from "../../Components/Admin/NewsList";
import Downloadables from "../../Components/Downloadables";
import AlumniProfileModal from "../../Components/Alumni/AlumniProfileModal";
import StudentProfilePage from "../Faculty/StudentProfilePage";
import { BiEdit } from "react-icons/bi";
import AlumniDetails from "../../Contents/AlumniDetails";

function AlumniMain(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                  {/* <Tab>Home</Tab> */}
                  <Tab>Profile</Tab>
                  <Tab>Links</Tab>
                  <Tab>Downloadables</Tab>
                </TabList>
                <TabPanels py={10}>
                  <TabPanel sx={{ width: "100vh" }}>
                    <StudentProfilePage />
                    <Box align="center">
                      <Button
                        onClick={onOpen}
                        size="sm"
                        leftIcon={<BiEdit />}
                        mt={2}
                        colorScheme="orange"
                        variant="outline"
                      >
                        Edit details
                      </Button>
                    </Box>
                    {/* DETAILS */}
                    <AlumniDetails />
                    <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
                      <ModalOverlay />

                      <AlumniProfileModal />
                    </Modal>
                  </TabPanel>
                  <TabPanel>
                    <Text fontWeight={600} mb={2}>
                      Survey link:
                    </Text>
                    {/* <Box py={2} px={3} bg="gray.100" borderRadius={5}> */}
                    <Link
                      href="https://drive.google.com/drive/my-drive"
                      target="_blank"
                    >
                      https://drive.google.com/drive/my-drive
                    </Link>
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
          <Box pos="fixed" h="100vh">
            <NewsList />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default AlumniMain;
