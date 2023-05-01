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
  const [user, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [fName, setFName] = useState(user?.fname);
  const [mName, setMName] = useState(user?.mname);
  const [lName, setLName] = useState(user?.lfname);
  const [batch, setBatch] = useState("");
  const [section, setSection] = useState("");
  const [agencyType, setAgency] = useState("");
  const [industryType, setIndustry] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [image, setImage] = useState("");
  // const [list, setList] = useState([]);

  //   UPDATE
  const update = async (e) => {
    e.preventDefault();

    let response = await api.post(`/alumni/${user?.id}`, {
      fName: fName,
      lName: lName,
      mName: mName,
      batch: batch,
      section: section,
      agency: agencyType,
      industry: industryType,
      title: title,
      year: year,
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
  };

  useEffect(() => {}, []);
  return (
    <div>
      <form
        onSubmit={(e) => {
          update(e);
        }}
      >
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
                        mr="2"
                        value={fName}
                        name="name"
                        onChange={(e) => setFName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel
                        fontWeight={500}
                        color="gray.600"
                        fontSize="sm"
                        htmlFor="username"
                      >
                        Middle name
                      </FormLabel>

                      <Input
                        mr="2"
                        value={mName}
                        name="name"
                        onChange={(e) => setMName(e.target.value)}
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
                        mr="2"
                        value={lName}
                        name="name"
                        onChange={(e) => setLName(e.target.value)}
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
                        mr="2"
                        value={batch}
                        name="name"
                        onChange={(e) => setBatch(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel
                        fontWeight={500}
                        color="gray.600"
                        fontSize="sm"
                        htmlFor="username"
                      >
                        Section (BSIT-4A)
                      </FormLabel>

                      <Input
                        mr="2"
                        value={section}
                        name="name"
                        onChange={(e) => setSection(e.target.value)}
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

                  <Select
                    placeholder="Select job"
                    onChange={(e) => setAgency(e.target.value)}
                  >
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

                  <Select
                    placeholder="Select industry"
                    onChange={(e) => setIndustry(e.target.value)}
                  >
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
                    mr="2"
                    value={title}
                    name="name"
                    onChange={(e) => setTitle(e.target.value)}
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

                  <Select
                    placeholder="Years"
                    onChange={(e) => setYear(e.target.value)}
                  >
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
              type="submit"
              fontWeight={500}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </div>
  );
}

export default AlumniProfileModal;
