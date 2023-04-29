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
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
  useDisclosure,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import Announcements from "../../Components/Admin/Announcements";
import News from "../../Components/Admin/News";
import NewsList from "../../Components/Admin/NewsList";
import Sidebar from "../../Components/Admin/Sidebar";
import Preview from "../../Components/News";

function NewsAndAnnouncement(props) {
  const preview = useDisclosure();
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Box bg="white" px={4}>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
              <GridItem colSpan={3}>
                <Heading>News</Heading>
                <Button
                  onClick={preview.onOpen}
                  size="sm"
                  mt={6}
                  colorScheme="orange"
                  variant="outline"
                >
                  Preview
                </Button>
                <News />
              </GridItem>
              <GridItem colSpan={2} h="auto">
                <NewsList />
              </GridItem>
            </Grid>
          </Box>
        </div>
      </div>

      {/* PREVIEW */}
      <Modal
        blockScrollOnMount={false}
        isOpen={preview.isOpen}
        onClose={preview.onClose}
        size="full"
      >
        <ModalContent>
          <ModalHeader>Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Preview />
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={preview.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default NewsAndAnnouncement;
