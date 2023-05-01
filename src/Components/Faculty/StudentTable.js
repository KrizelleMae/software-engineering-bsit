import {
  useColorModeValue,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  Avatar,
  Text,
  Link,
  HStack,
  Stack,
  FormLabel,
  FormControl,
  Switch,
  Badge,
  Container,
  GridItem,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  BiEditAlt,
  BiShowAlt,
  BiPlus,
  BiTrash,
  BiSearch,
  BiUser,
  BiLogOutCircle,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import api from "../../Api/api";
import moment from "moment";
import { Grid } from "swiper";
import SideProfile from "../SideProfile";
import NewsList from "../Admin/NewsList";
import Feed from "./Feed";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { BsClipboard } from "react-icons/bs";
import Downloadables from "../Downloadables";
import LogoutBtn from "../LogoutBtn";
import LinkList from "../LinkList";

function StudentTable(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const [data, setData] = useState([]);
  const [feed, setFeed] = useState([]);
  const [student, setStudent] = useState([]);

  const getData = async () => {
    let res = await api.get(`/student/${user?.FK_faculty_id}`);

    console.log(user?.FK_faculty_id);

    setData(res.data);
  };

  const getFeed = async () => {
    let response = await api.get(`/memoAccess/1`);

    setFeed(response.data);
  };

  const show = async (id) => {
    let response = await api.get(`/student/show/${id}`);

    setStudent(response.data);
  };

  const handleGraduate = (id) => {
    onClose();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, continue.",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await api.post(`/student/setgrad/${id}`);
        if (response.status === 200) {
          toast
            .success("Record updated", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
            .then((e) => {
              window.location.reload(false);
            });
        } else if (response.status === 404) {
          toast.error("Error occurred. Please try again!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error("Error occurred. Please try again!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    });
  };

  useEffect(() => {
    getData();
    getFeed();
  }, [data]);

  return (
    <>
      <Flex>
        <Tabs isFitted variant="enclosed" w={"70%"}>
          <TabList
            mb="1em"
            sx={{
              pl: 10,
              pt: 10,
              position: "fixed",
              zIndex: 30,
              backgroundColor: "white",
              w: "68%",
            }}
          >
            <Tab
              fontWeight={600}
              fontSize={13}
              color={"blue.500"}
              textTransform={"uppercase"}
            >
              Home{" "}
            </Tab>
            <Tab
              fontWeight={600}
              fontSize={13}
              color={"blue.500"}
              textTransform={"uppercase"}
            >
              Links
            </Tab>
            <Tab
              fontWeight={600}
              fontSize={13}
              color={"blue.500"}
              textTransform={"uppercase"}
            >
              Downloadables
            </Tab>
            <Tab
              fontWeight={600}
              fontSize={13}
              color={"blue.500"}
              textTransform={"uppercase"}
            >
              My Students
            </Tab>

            <Tab
              fontWeight={600}
              fontSize={13}
              color={"blue.500"}
              textTransform={"uppercase"}
            >
              <LogoutBtn />
            </Tab>
          </TabList>
          <TabPanels sx={{ mt: "80px" }}>
            <TabPanel>
              {/* HOME */}
              {/* <Box zIndex={10}>
                <HStack
                  zIndex={10}
                  w={400}
                  backgroundColor="white"
                  h="80px"
                  py={12}
                  ml={-1}
                  align="right"
                >
                  <InputGroup>
                    <InputLeftElement>
                      <BiSearch fontSize="18" />
                    </InputLeftElement>
                    <Input placeholder="Search" borderRadius={50} />
                    <InputRightElement w="auto">
                      <Button size="xs" mx={2} borderRadius={50}>
                        Search
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  {/* MENU */}
              {/* <Menu>
                <MenuButton as={Button} rightIcon={<BiChevronDown />} size="sm">
                  Filter by{" "}
                </MenuButton>
                <MenuList>
                  <MenuItem>Memorandum</MenuItem>
                  <MenuItem>Order</MenuItem>
                  <MenuItem>News</MenuItem>
                </MenuList>
              </Menu> 
                </HStack>
              </Box> */}

              <Stack zIndex={-10} p={10}>
                <Text mb={3} textTransform="uppercase" fontWeight={600}>
                  Memorandum
                </Text>
                {feed.map((e, key) => {
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
              <Box p={10}>
                <LinkList />
              </Box>
            </TabPanel>
            <TabPanel>
              {/* DOWNLOADS */}
              <Box p={10}>
                <Downloadables />
              </Box>
            </TabPanel>
            <TabPanel>
              {/* STUDENTS */}
              <TableContainer border={"1px solid #eee"} mt={8}>
                <Table size="sm" variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Complete Name </Th>
                      <Th>Batch</Th>
                      <Th>Email</Th>
                      <Th>Graduated</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.length === 0 ? (
                      <Tr>
                        <Td colSpan={5} textAlign="center" py={6}>
                          No data found
                        </Td>
                      </Tr>
                    ) : (
                      data.map((el) => {
                        return (
                          <Tr>
                            {/* <Td>
                      <Image borderRadius="full" boxSize="54" />
                    </Td> */}
                            <Td>{el.lname + ", " + el.fname + " " + el.mi}</Td>
                            <Td> {el.batch}</Td>
                            <Td>{el.email}</Td>
                            <Td>
                              {el.year === "" ? (
                                <Badge colorScheme="yellow">Undergrad</Badge>
                              ) : (
                                <Badge colorScheme="blue">Alumni</Badge>
                              )}
                            </Td>

                            <Td>
                              <HStack>
                                <Button
                                  size="sm"
                                  colorScheme={"blue"}
                                  onClick={() => {
                                    onOpen();
                                    show(el.FK_user_ID);
                                  }}
                                  icon={<BiShowAlt />}
                                >
                                  Show
                                </Button>
                              </HStack>
                              {/* <IconButton
                        onClick={() => {
                          // getFaculty(el.id);
                          navigate(`/admin/view-activity/${el.id}`);
                        }}
                        size="sm"
                        colorScheme={"blue"}
                        mr={2}
                        icon={<BiEditAlt />}
                      /> */}

                              {/* <IconButton
                        onClick={() => {
                          delete "id";
                        }}
                        size="sm"
                        colorScheme={"red"}
                        icon={<BiTrash />}
                      /> */}
                            </Td>
                          </Tr>
                        );
                      })
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box h="100vh" right="0">
          <NewsList />
        </Box>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Student Details </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              {student.map((el) => {
                return (
                  <>
                    <Box rounded={"lg"} textAlign={"center"}>
                      <Avatar
                        size={"xl"}
                        // src={
                        //   "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        // }
                        alt={"Avatar Alt"}
                        mb={4}
                        pos={"relative"}
                        _after={{
                          content: '""',
                          w: 4,
                          h: 4,
                          bg: "green.300",
                          border: "2px solid white",
                          rounded: "full",
                          pos: "absolute",
                          bottom: 0,
                          right: 3,
                        }}
                      />
                      <Heading fontSize={"2xl"} fontFamily={"body"}>
                        {el.fname + " " + el.mi + ". " + el.lname}
                      </Heading>
                      <Text fontWeight={600} color={"gray.500"} mb={4}>
                        {el.email}
                      </Text>

                      <Text textAlign={"center"}>Batch</Text>
                      <Text fontWeight={600} fontSize={20}>
                        {el.batch}
                      </Text>

                      {el.year === "" ? (
                        <Badge colorScheme="yellow">Undergrad</Badge>
                      ) : (
                        <Badge colorScheme="blue">Alumni</Badge>
                      )}

                      <Box mt={7}>
                        {el.year === "" ? (
                          <Button
                            size="sm"
                            colorScheme="orange"
                            onClick={() => {
                              handleGraduate(el.FK_user_ID);
                            }}
                            leftIcon={<BiUser />}
                          >
                            Set student as graduate
                          </Button>
                        ) : (
                          ""
                        )}
                      </Box>
                    </Box>
                  </>
                );
              })}
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default StudentTable;
