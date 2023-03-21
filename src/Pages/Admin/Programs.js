import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Heading,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  Button,
  Drawer,
  Modal,
  Image,
  useDisclosure,
  ModalOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Stack,
  DrawerFooter,
  Select,
  Text,
  Flex,
  Spacer,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import api from "../../Api/api";

import AcademicPrograms from "../../Components/AcademicPrograms";

import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BiEditAlt, BiPlus, BiTrash } from "react-icons/bi";
import cloudinary from "../../Api/CloudinaryApi";
import { BsEye } from "react-icons/bs";
import ProgramsModal from "../../Components/Popups/ProgramsModal";

function Programs(props) {
  const drawer = useDisclosure();
  const modal = useDisclosure();
  const preview = useDisclosure();

  const [id, setId] = useState("");

  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let response = await api.get("/programs");

      if (response) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      if (file[0].size > 10000000) {
        console.log("File size is too big. Maximum size upload is 10mb");
      } else {
        const data = new FormData();
        data.append("file", file[0]);
        data.append("upload_preset", "v5l0cmm0");
        data.append("cloud_name", "de0h9yawl");

        let upload = await cloudinary.post("/", data);

        if (upload.status === 200) {
          let response = await api.post("/programs", {
            title: title,
            image: upload.data.url,
            description: description,
            // qualifications: JSON.stringify(list),
            // public_id: upload.data.public_id,
          });

          // if (response.status === 200) {
          //   console.log("Success");
          // }

          console.log(response.data);
        } else {
          console.log(upload);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  //   // EDIT
  //   const update = async (event) => {
  //     event.preventDefault();
  //     try {
  //       let response = await api.post(`/mission/1`, {
  //         description: mDesc,
  //       });

  //       console.log(response);

  //       // if (response.data.status === 1) {
  //       //   console.log("success");
  //       // } else {
  //       //   console.log("failed");
  //       // }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Heading>Academic Programs</Heading>

          <Flex justifyContent={"start"} alignItems={"center"} mt={8} mb={4}>
            <Button colorScheme="teal" onClick={drawer.onOpen} size="sm" mr={2}>
              + Add program
            </Button>

            <Button
              size="sm"
              colorScheme={"blue"}
              rightIcon={<BsEye />}
              onClick={preview.onOpen}
            >
              Preview
            </Button>
          </Flex>

          {/* TABLE */}

          <TableContainer border={"1px solid #eee"}>
            <Table size="sm" variant="simple">
              <Thead>
                <Tr>
                  <Th>Photo</Th>
                  <Th>Title</Th>
                  <Th>Description</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((el) => {
                  return (
                    <Tr>
                      <Td>
                        <Image
                          //   borderRadius="full"
                          //   boxSize="58"
                          h={51}
                          src={el.image}
                        />
                      </Td>
                      <Td>{el.title}</Td>

                      <Td style={{ width: "20%" }}>
                        <Text style={{ textOverflow: "ellipsis" }}>
                          {/* {el.description} */}
                          ---- See more ---
                        </Text>
                      </Td>

                      <Td>
                        <Button
                          onClick={() => {
                            // getFaculty(el.id);
                            setId(el.id);
                            modal.onOpen();
                          }}
                          size="sm"
                          rightIcon={<BiEditAlt />}
                        >
                          Edit
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
        <Drawer
          size={"lg"}
          isOpen={drawer.isOpen}
          placement="right"
          onClose={drawer.onClose}
        >
          <form onSubmit={submit}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                Add academic program
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
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
                  <FormControl isRequired>
                    <FormLabel
                      fontWeight={500}
                      color="gray.600"
                      fontSize="sm"
                      htmlFor="username"
                    >
                      Academic Program Title
                    </FormLabel>

                    <Textarea
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Program name"
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
                      Program description
                    </FormLabel>

                    <Textarea
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Write description"
                      mr="2"
                    />
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
        <Modal
          blockScrollOnMount={false}
          isOpen={preview.isOpen}
          onClose={preview.onClose}
          size="full"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Preview</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <AcademicPrograms />
              </Center>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={preview.onClose}>
                Close
              </Button>
              {/* <Button variant="ghost">Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* EDIT MODAL */}
        <Modal
          blockScrollOnMount={true}
          isOpen={modal.isOpen}
          onClose={modal.onClose}
          size="xl"
        >
          <ModalOverlay />
          <ProgramsModal id={id} />
        </Modal>
      </div>
    </div>
  );
}

export default Programs;
