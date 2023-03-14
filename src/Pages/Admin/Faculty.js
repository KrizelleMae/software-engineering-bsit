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
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Stack,
  Image,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  FormLabel,
  Input,
  Center,
  DrawerFooter,
  Textarea,
  Select,
  FormControl,
} from "@chakra-ui/react";
import React from "react";

import Sidebar from "../../Components/Admin/Sidebar";

function Faculty(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Heading>Faculty</Heading>
        </div>
        <HStack mt={50}>
          <Stack>
            <Table w={1200} maxW={1000} minW={200}>
              <Thead>
                <Tr>
                  <Th textAlign="center">ID</Th>
                  <Th textAlign="center">Photo</Th>
                  <Th textAlign="center">Name</Th>
                  <Th textAlign="center">Position</Th>
                  <Th>
                    <Button colorScheme="teal" onClick={onOpen}>
                      + Add Faculty
                    </Button>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>0001</Td>
                  <Td>
                    <Image
                      borderRadius="full"
                      boxSize="54"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&"
                    />
                  </Td>
                  <Td>Hon. James Tu Ban</Td>
                  <Td>Top & Bottom</Td>
                  <Td>
                    <Button colorScheme="teal" onClick={onOpen}>
                      View
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Stack>
          <Stack></Stack>
        </HStack>
      </div>

      <Drawer
        size={"lg"}
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Add new faculty member
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Center>
                <Image
                  mt={15}
                  borderRadius="full"
                  boxSize="104"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&"
                />
              </Center>
              <FormControl isRequired>
                {" "}
                <FormLabel htmlFor="username"> Name</FormLabel>
                <Box display="flex">
                  <Input
                    ref={firstField}
                    id="username"
                    placeholder="Firstname"
                    mr="2"
                  />
                  <Input
                    ref={firstField}
                    id="username"
                    placeholder="Lastname"
                  />
                </Box>
              </FormControl>

              <Box>
                <FormLabel htmlFor="username"> Name</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Please enter name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="owner"> Designation</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Department Head</option>
                  <option value="kola">Faculty I</option>
                  <option value="kola">Faculty II</option>
                  <option value="kola">Faculty III</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="desc">EDUCATIONAL QUALIFICATION</FormLabel>
                <Textarea id="desc" />
                <Input
                  type="file"
                  accept="image/png, image/jpeg"
                  // onChange={(e) => {
                  //   setFile(e.target.files);
                  // }}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Faculty;
