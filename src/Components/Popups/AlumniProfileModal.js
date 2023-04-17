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
  HStack,
} from "@chakra-ui/react";
import api from "../../Api/api";
import industry from "../../Data/WorkIndustryList";
import { toast } from "react-toastify";
import { agency } from "../../Data/AgencyList";
import { years } from "../../Data/Years";

function AlumniProfileModal(props) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState("");
  const [list, setList] = useState([]);

  const [details, setDetails] = useState([]);

  console.log(industry.industry);

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
        <ModalHeader>Alumni Profile</ModalHeader>
        <ModalCloseButton />
        <DrawerBody>
          {/* {details.map((el) => {
            return (
              <> */}
          <Stack spacing="25px" p={4}>
            <Flex mb={4}>
              <Box w="100%">
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
                      placeholder="John"
                      mr="2"
                      defaultValue={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      fontWeight={500}
                      color="gray.600"
                      fontSize="sm"
                      htmlFor="username"
                    >
                      Middle name
                    </FormLabel>

                    <Input
                      placeholder="John"
                      mr="2"
                      defaultValue={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
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
                      placeholder="John"
                      mr="2"
                      defaultValue={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </HStack>

                <HStack mt={5}>
                  <FormControl isRequired>
                    <FormLabel
                      fontWeight={500}
                      color="gray.600"
                      fontSize="sm"
                      htmlFor="username"
                    >
                      Batch
                    </FormLabel>

                    <Input
                      placeholder="John"
                      mr="2"
                      defaultValue={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      fontWeight={500}
                      color="gray.600"
                      fontSize="sm"
                      htmlFor="username"
                    >
                      Section
                    </FormLabel>

                    <Input
                      placeholder="John"
                      mr="2"
                      defaultValue={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </HStack>
              </Box>
            </Flex>

            <HStack>
              <FormControl isRequired>
                <FormLabel
                  fontWeight={500}
                  color="gray.600"
                  fontSize="sm"
                  htmlFor="username"
                >
                  Agency Type
                </FormLabel>

                <Select placeholder="Select job">
                  {agency.map((el) => {
                    return <option value={el.name}>{el.name}</option>;
                  })}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  fontWeight={500}
                  color="gray.600"
                  fontSize="sm"
                  htmlFor="username"
                >
                  Work Industry
                </FormLabel>

                <Select placeholder="Select industry">
                  {industry.industry.map((el) => {
                    return <option value={el.name}>{el.name}</option>;
                  })}
                </Select>
              </FormControl>
            </HStack>

            <HStack>
              <FormControl isRequired width={1500}>
                <FormLabel
                  fontWeight={500}
                  color="gray.600"
                  fontSize="sm"
                  htmlFor="username"
                >
                  Job Title
                </FormLabel>

                <Input
                  placeholder="John"
                  mr="2"
                  defaultValue={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  fontWeight={500}
                  color="gray.600"
                  fontSize="sm"
                  htmlFor="username"
                >
                  Years in Service
                </FormLabel>

                <Select placeholder="Years">
                  {years.map((el) => {
                    return <option value={el.name}>{el.name}</option>;
                  })}
                </Select>
              </FormControl>
            </HStack>
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
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </div>
  );
}

export default AlumniProfileModal;
