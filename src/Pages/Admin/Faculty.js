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
  Avatar,
  IconButton,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiEdit, BiEditAlt, BiPlus, BiTrash } from "react-icons/bi";

import Sidebar from "../../Components/Admin/Sidebar";

function Faculty(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [list, setList] = useState([]);
  const [len, setLen] = useState(list.length);

  // OTHER SKILLS
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...list];
    list[index][name] = value;
    setList(list);
  };

  //   handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...list];
    list.splice(index, 1);
    setList(list);
  };

  // handle click event of the Add button
  const handleAddClick = (k) => {
    setList([...list, { desc: "" }]);
    console.log(list[list.length]);
  };
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Heading>Faculty</Heading>

          <Button colorScheme="teal" onClick={onOpen} mt={10} mb={2} size="sm">
            + Add Faculty
          </Button>
          <HStack mt={0}>
            <Stack>
              <Table w={1200}>
                <Thead>
                  <Tr>
                    <Th>Photo</Th>
                    <Th>Name</Th>
                    <Th>Rank</Th>
                    <Th>Designation</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Image
                        borderRadius="full"
                        boxSize="54"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&"
                      />
                    </Td>
                    <Td>Faculty name</Td>
                    <Td>MIT, Phd</Td>
                    <Td>Professor I</Td>
                    <Td>
                      <Button
                        onClick={onOpen}
                        size="sm"
                        rightIcon={<BiEditAlt />}
                      >
                        Edit
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Stack>
            <Stack></Stack>
          </HStack>
        </div>

        <Drawer size={"lg"} isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Add new faculty member
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Center>
                  <Avatar
                    mt={15}
                    // borderRadius="full"
                    boxSize="100"
                    src="https://bit.ly/broken-link"
                  />
                </Center>
                <FormControl isRequired>
                  <FormLabel
                    fontWeight={500}
                    color="gray.600"
                    fontSize="sm"
                    htmlFor="username"
                  >
                    Faculty name
                  </FormLabel>
                  <Box display="flex">
                    <Input id="username" placeholder="John" mr="2" />
                    <Input id="username" placeholder="Doe" />
                  </Box>
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontWeight={500}
                    color="gray.600"
                    fontSize="sm"
                    htmlFor="username"
                  >
                    {" "}
                    Rank
                  </FormLabel>

                  <Input placeholder="MIT, Phd" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    fontWeight={500}
                    color="gray.600"
                    fontSize="sm"
                    htmlFor="username"
                  >
                    {" "}
                    Designation
                  </FormLabel>

                  <Select>
                    <option value="" selected>
                      Please select
                    </option>
                    <option>Director/Dean</option>
                    <option>Department Head</option>
                    <option>Instructor I</option>
                    <option>Instructor II</option>
                    <option>Instructor III</option>
                    <option>Visiting Lecturer</option>
                    <option>Professor I</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    fontWeight={500}
                    color="gray.600"
                    fontSize="sm"
                    htmlFor="username"
                  >
                    {" "}
                    Educational Qualifications
                  </FormLabel>
                  <Box mt={2}>
                    {list.map((e, key) => {
                      return (
                        <UnorderedList alignItems="center">
                          <ListItem>
                            <FormControl
                              isRequired
                              mt={2}
                              display="flex"
                              alignItems="center"
                            >
                              {/* <FormLabel fontWeight={500} color='gray.500' fontSize='sm' fontWeight={500} color='gray.500' fontSize={15}>
                      Objective {key + 1}
                    </FormLabel> */}
                              <Textarea
                                autoFocus
                                bg="white"
                                rows={1}
                                onChange={() => {
                                  e.target.value === ""
                                    ? console.log("empty")
                                    : handleInputChange(e, key);
                                }}
                              />
                              <IconButton
                                icon={<BiTrash />}
                                size="xs"
                                ml={2}
                                colorScheme="red"
                                onClick={() => {
                                  handleRemoveClick(key);
                                }}
                              />
                            </FormControl>
                          </ListItem>
                        </UnorderedList>
                      );
                    })}
                  </Box>
                  <Button
                    mt={5}
                    rightIcon={<BiPlus />}
                    size="sm"
                    onClick={() => {
                      handleAddClick();
                    }}
                  >
                    Add objective
                  </Button>
                </FormControl>
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
    </div>
  );
}

export default Faculty;
