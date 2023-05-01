import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
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
  TableContainer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiEdit, BiEditAlt, BiPlus, BiTrash } from "react-icons/bi";
import api from "../../Api/api";
import cloudinary from "../../Api/CloudinaryApi";
import { toast } from "react-toastify";

import Sidebar from "../../Components/Admin/Sidebar";
import FacultyModal from "../../Components/Popups/FacultyModal";
import Swal from "sweetalert2";

function Faculty(props) {
  const drawer = useDisclosure();
  const modal = useDisclosure();
  // const { , onOpen1, onClose1 } = useDisclosure();
  const [list, setList] = useState([]);
  // const [len, setLen] = useState(list.length);
  const [fname, setFname] = useState("");
  const [mi, setMI] = useState("");
  const [lname, setLname] = useState("");
  const [designation, setDesignation] = useState("");
  const [file, setFile] = useState("");
  const [id, setId] = useState("");

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [details, setDetails] = useState([]);

  const getAllFaculty = async () => {
    let response = await api.get("/faculty");
    setData(response.data);
  };

  const del = async (id) => {
    let response = await api.delete(`/faculty/${id}`);

    if (response.status === 200) {
      toast
        .success("Successfully recorded", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        .then(() => {
          window.location.reload(false);
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
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (file[0].size > 10000000) {
        toast.error("File size is too big. Maximum size upload is 10mb", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        const data = new FormData();

        data.append("file", file[0]);
        data.append("upload_preset", "v5l0cmm0");
        data.append("cloud_name", "de0h9yawl");

        let upload = await cloudinary.post("/", data);

        if (upload.status === 200) {
          let response = await api.post("/faculty", {
            fname: fname,
            mi: mi,
            lname: lname,
            image: upload.data.url,
            designation: designation,
            qualifications: JSON.stringify(list),
            // public_id: upload.data.public_id,
          });

          if (response.status === 200) {
            toast
              .success("Successfully recorded", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
              .then(() => {
                window.location.reload(false);
              });
          }

          // console.log(response.data);
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
    } catch (e) {
      console.log(e);
    }
  };

  // OTHER SKILLS
  const handleInputChange = (value, index) => {
    const list_new = [...list];
    list_new[index]["desc"] = value;
    setList(list_new);
  };

  //   handle click event of the Remove button
  const handleRemoveClick = (index) => {
    // console.log(index);
    const list_new = [...list];
    list_new.splice(index, 1);
    setList(list_new);
  };

  // handle click event of the Add button
  const handleAddClick = (k) => {
    setList([...list, { desc: "" }]);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   let temp = [...newData];
  //   temp[name] = value;
  //   setNewData(temp);
  // };

  const destroy = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await api.delete(`/faculty/${id}`);
        if (response.status === 200) {
          toast
            .success("Successfully deleted", {
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
    getAllFaculty();
  }, [id, data]);
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Heading>Faculty</Heading>

          <Button
            colorScheme="teal"
            onClick={drawer.onOpen}
            mt={8}
            mb={4}
            size="sm"
          >
            + Add Faculty
          </Button>

          <TableContainer border={"1px solid #eee"}>
            <Table size="sm" variant="simple">
              <Thead>
                <Tr>
                  <Th>Photo</Th>
                  <Th>Name</Th>
                  {/* <Th>Rank</Th> */}
                  <Th>Designation</Th>
                  <Th>Qualifications</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((el) => {
                  return (
                    <Tr>
                      <Td>
                        <Image
                          borderRadius="full"
                          boxSize="54"
                          src={el.image}
                        />
                      </Td>
                      <Td>{el.fname + " " + el.lname}</Td>

                      <Td>{el.designation}</Td>
                      <Td>
                        <i>-- See more --</i>
                      </Td>
                      <Td>
                        <IconButton
                          onClick={() => {
                            // getFaculty(el.id);
                            setId(el.id);
                            modal.onOpen();
                          }}
                          size="sm"
                          colorScheme={"blue"}
                          mr={2}
                          icon={<BiEditAlt />}
                        />

                        <IconButton
                          onClick={() => {
                            destroy(el.id);
                          }}
                          size="sm"
                          colorScheme={"red"}
                          icon={<BiTrash />}
                        />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>

        <Drawer
          size={"xl"}
          isOpen={drawer.isOpen}
          placement="right"
          onClose={drawer.onClose}
        >
          <form onSubmit={submit}>
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
                    <FormLabel fontWeight={600} fontSize={15}>
                      Image cover
                    </FormLabel>
                    <Input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        setFile(e.target.files);
                      }}
                    />
                  </FormControl>
                  <HStack>
                    <FormControl isRequired>
                      <FormLabel
                        fontWeight={500}
                        color="gray.600"
                        fontSize="sm"
                        htmlFor="username"
                      >
                        First name
                      </FormLabel>

                      <Input
                        onChange={(e) => setFname(e.target.value)}
                        mr="2"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel
                        fontWeight={500}
                        color="gray.600"
                        fontSize="sm"
                        htmlFor="username"
                      >
                        Last name
                      </FormLabel>

                      <Input
                        onChange={(e) => setLname(e.target.value)}
                        mr="2"
                      />
                    </FormControl>
                    <FormControl isRequired w={200}>
                      <FormLabel
                        fontWeight={500}
                        color="gray.600"
                        fontSize="sm"
                        htmlFor="username"
                      >
                        MI
                      </FormLabel>

                      <Input onChange={(e) => setMI(e.target.value)} mr="2" />
                    </FormControl>
                  </HStack>

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

                    <Select onChange={(e) => setDesignation(e.target.value)}>
                      <option value="" selected>
                        Please select
                      </option>
                      <option value="Director">Director/Dean</option>
                      <option value="Department Head">Department Head</option>
                      <option value="Instructor I">Instructor I</option>
                      <option value="Instructor II">Instructor II</option>
                      <option value="Instructor III">Instructor III</option>
                      <option value="Visiting Lecturer">
                        Visiting Lecturer
                      </option>
                      <option value="Professor I">Professor I</option>
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
                      {list.map((el, key) => {
                        return (
                          <Box alignItems="center">
                            <div>
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
                                  onChange={(e) => {
                                    handleInputChange(e.target.value, key);
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
                            </div>
                          </Box>
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
                      Add qualifications
                    </Button>
                  </FormControl>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={drawer.onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" type="submit">
                  Submit
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </form>
        </Drawer>

        {/* EDIT MODAL */}
        <Modal
          blockScrollOnMount={false}
          isOpen={modal.isOpen}
          onClose={modal.onClose}
          size="2xl"
        >
          <ModalOverlay />
          <FacultyModal id={id} />
        </Modal>
      </div>
    </div>
  );
}

export default Faculty;
