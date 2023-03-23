import React, { useEffect, useState } from "react";
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Box,
  Stack,
  Button,
  DrawerBody,
  FormLabel,
  Input,
  Textarea,
  Select,
  FormControl,
  IconButton,
  Flex,
  Image,
} from "@chakra-ui/react";
import api from "../../Api/api";
import { BiPlus, BiSend, BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

function FacultyModal(props) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState("");
  const [list, setList] = useState([]);

  const [details, setDetails] = useState([]);

  const getFaculty = async () => {
    let response = await api.get(`/faculty/${props.id}`);
    setName(response.data.name);
    setDesignation(response.data.designation);
    setImage(response.data.image);
    setList(JSON.parse(response.data.qualifications));
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
    console.log(list[list.length]);
  };

  //   UPDATE
  const update = async () => {
    let response = await api.post(`/faculty/${props.id}`, {
      name: name,
      designation: designation,
      qualifications: JSON.stringify(list),
      // public_id: upload.data.public_id,
    });

    if (response.status === 200) {
      toast
        .success("Successfully recorded", {
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

    console.log(response.data);
  };

  useEffect(() => {
    getFaculty();
  }, [props.id]);
  return (
    <div>
      <ModalContent>
        <ModalHeader>Update Record</ModalHeader>
        <ModalCloseButton />
        <DrawerBody>
          {/* {details.map((el) => {
            return (
              <> */}
          <Stack spacing="24px">
            <Flex mb={4}>
              <Image
                // mt={15}
                // borderRadius="full"
                // boxSize="100"
                width={150}
                h={150}
                src={image}
                mr={5}
              />

              <Box w="100%">
                <FormControl isRequired>
                  <FormLabel
                    fontWeight={500}
                    color="gray.600"
                    fontSize="sm"
                    htmlFor="username"
                  >
                    Faculty name
                  </FormLabel>

                  <Input
                    placeholder="John"
                    mr="2"
                    defaultValue={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired mt={2}>
                  <FormLabel
                    fontWeight={500}
                    color="gray.600"
                    fontSize="sm"
                    htmlFor="username"
                  >
                    Designation
                  </FormLabel>

                  <Select
                    name="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  >
                    {/* <option value="">Please select</option> */}
                    <option value="Director">Director/Dean</option>
                    <option value="Department Head">Department Head</option>
                    <option value="Instructor I">Instructor I</option>
                    <option value="Instructor II">Instructor II</option>
                    <option value="Instructor III">Instructor III</option>
                    <option value="Visiting Lecturer">Visiting Lecturer</option>
                    <option value="Professor I">Professor I</option>
                  </Select>
                </FormControl>
              </Box>
            </Flex>

            <FormControl isRequired>
              <FormLabel
                fontWeight={500}
                color="gray.600"
                fontSize="sm"
                htmlFor="username"
              >
                Educational Qualifications
              </FormLabel>
              {list.map((el, key) => {
                return (
                  <>
                    <Box mt={2}>
                      <Box alignItems="center">
                        <div>
                          <FormControl
                            isRequired
                            mt={2}
                            display="flex"
                            alignItems="center"
                          >
                            <Textarea
                              autoFocus
                              bg="white"
                              defaultValue={el.desc}
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
                    </Box>
                  </>
                );
              })}
            </FormControl>

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
          </Stack>
          {/* </>
            );
          })} */}
        </DrawerBody>

        <ModalFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            fontWeight={500}
            onClick={update}
          >
            Update record
          </Button>
        </ModalFooter>
      </ModalContent>
    </div>
  );
}

export default FacultyModal;
